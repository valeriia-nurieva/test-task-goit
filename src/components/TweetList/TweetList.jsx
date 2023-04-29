import TweetCard from 'components/TweetCard';
import { TweetBox, TweetItem } from "./TweetList.styled";

const TweetList = ({ users }) => {

  return (
    <TweetBox>
      {users &&
        users.map(({ id, user, avatar, followers, tweets }) => {
          return (
            <TweetItem key={id}>
              <TweetCard user={user} avatar={avatar} tweets={tweets} followers={followers} />
            </TweetItem>
          );
        })}
    </TweetBox>
  );
};

export default TweetList;
