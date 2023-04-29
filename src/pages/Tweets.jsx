import { useState, useEffect } from 'react';
import TweetList from 'components/TweetList';
import Container from 'components/Container';
import Loader from 'Loader';
import { getUsers } from 'api';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUsersTweets() {
      try {
        setIsLoading(true);
        const data = await getUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        alert('Oops! Something went wrong! Please try again.');
      }
    }
    getUsersTweets();
  }, []);

  return (
    <main>
      <Container>
        <TweetList users={users} />
        <TweetList />
        {isLoading && <Loader />}
      </Container>
    </main>
  );
};

export default Tweets;
