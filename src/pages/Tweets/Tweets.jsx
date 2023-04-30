import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top';
import TweetList from 'components/TweetList';
import Container from 'components/Container';
import LoadMore from 'components/LoadMore';
import Loader from 'Loader';
import { BsArrowLeft } from 'react-icons/bs';
import { getUsers } from 'api';
import { Section, BackLinkHref, Info } from './Tweets.styled';

const PAGE_LIMIT = 3;

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <main>
      <Section>
        <Container>
          <BackLinkHref to={backLinkHref}>
            <BsArrowLeft />
            Go back
          </BackLinkHref>
          {users.length > 0 && (
            <>
              <TweetList users={users} />
              {hasMoreUsers ? (
                <LoadMore handleClick={handleClick} />
              ) : (
                <Info>You have reached the end of the users list &#128203;</Info>
              )}
            </>
          )}
          <ScrollToTop smooth color="#373737" style={{ backgroundColor: '#ebd8ff' }} />
          {isLoading && <Loader />}
        </Container>
      </Section>
    </main>
  );
};

export default Tweets;
