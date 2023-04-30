import TweetCard from 'components/TweetCard';
import { TweetBox, TweetItem } from './TweetList.styled';

const TweetList = ({ filteredUsers }) => {

  return (
    <>
      <TweetBox>
        {filteredUsers &&
          filteredUsers.map(({ id, user, avatar, followers, tweets }) => {
            return (
              <TweetItem key={id}>
                <TweetCard
                  id={id}
                  user={user}
                  avatar={avatar}
                  tweets={tweets}
                  followers={followers}
                />
              </TweetItem>
            );
          })}
      </TweetBox>
    </>
  );
};

export default TweetList;
