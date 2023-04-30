import { useState } from 'react';
import Article from './TweetCard.styled';
import Logo from 'components/TweetCard/Logo';
import Background from 'components/TweetCard/Background';
import Avatar from 'components/TweetCard/Avatar';
import Info from 'components/TweetCard/Info';
import FollowingButton from 'components/TweetCard/FollowingButton';
import { updateUser } from 'api';

const TweetCard = ({ id, user, avatar, followers, tweets }) => {
  const [following, setFollowing] = useState(
    localStorage.getItem(`following-${id}`) === 'true' || false
  );
  const [currentFollowers, setCurrentFollowers] = useState(followers);

  const credentials = {
    followers: following ? currentFollowers - 1 : currentFollowers + 1,
  };

  const handleClick = async () => {
    setFollowing(!following);
    try {
      const response = await updateUser(id, credentials);
      setCurrentFollowers(response.followers);
      localStorage.setItem(`following-${id}`, !following);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Article>
      <Logo />
      <Background />
      <Avatar avatar={avatar} />
      <Info tweets={tweets} followers={currentFollowers} user={user} />
      <FollowingButton handleClick={handleClick} following={following} />
    </Article>
  );
};

export default TweetCard;