import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import TweetList from 'components/TweetList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import ScrollToTopBtn from 'components/ScrollToTopBtn';
import LoadMore from 'components/LoadMore';
import Loader from 'components/Loader';
import { BsArrowLeft } from 'react-icons/bs';
import { getUsers } from 'api';
import { getfilteredUsers } from 'helpers';
import { PAGE_LIMIT } from 'constants';
import { Section, BackLinkHref, Wrapper, Info } from './Tweets.styled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [filter, setFilter] = useState('show all');
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const filteredUsers = getfilteredUsers(users, filter);
  
  useEffect(() => {
    async function getUsersTweets() {
      try {
        setIsLoading(true);
        const data = await getUsers({ page, limit: PAGE_LIMIT });
        if (data.length < PAGE_LIMIT) {
          setHasMoreUsers(false);
        }
        setUsers(prevUsers => [...prevUsers, ...data]);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getUsersTweets();
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <main>
      <Section>
        <Container>
          <Wrapper>
            <BackLinkHref to={backLinkHref}>
              <BsArrowLeft />
              Go back
            </BackLinkHref>
            <Filter filter={filter} handleFilterChange={handleFilterChange} />
          </Wrapper>
          {users.length > 0 && (
            <>
              <TweetList filteredUsers={filteredUsers} />
              {hasMoreUsers ? (
                <LoadMore handleClick={handleClick} />
              ) : (
                <Info>
                  You have reached the end of the users list &#128203;
                </Info>
              )}
            </>
          )}
          <ScrollToTopBtn />
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};

export default Tweets;
