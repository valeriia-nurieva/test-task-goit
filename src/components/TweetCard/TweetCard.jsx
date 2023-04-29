import { useState } from 'react';
import Article from './TweetCard.styled';
import Logo from 'components/TweetCard/Logo';
import Background from 'components/TweetCard/Background';
import Avatar from 'components/TweetCard/Avatar';
import Info from 'components/TweetCard/Info';
import FollowingButton from 'components/TweetCard/FollowingButton';

const TweetCard = ({user, avatar, followers, tweets}) => {
  const [following, setFollower] = useState(false);
  const [count, setCount] = useState(100500);

// useEffect(() => {
//   const savedFollower = JSON.parse(localStorage.getItem('following'));
//   const savedCount = localStorage.getItem('count');
//   if (savedFollower !== null && savedCount !== null) {
//     setFollower(savedFollower);
//     setCount(parseInt(savedCount));
//   }
// }, []);

// useEffect(() => {
// localStorage.setItem('following', JSON.stringify(following));
//     localStorage.setItem('count', count);
// }, [following, count]);

  const handleClick = () => {
    setFollower(!following);
    setCount(following ? 100500 : count + 1);
  };

  return (
    <Article>
      <Logo />
      <Background />
      <Avatar avatar={avatar} />
      <Info tweets={tweets} followers={followers} user={user} />
      <FollowingButton handleClick={handleClick} following={following} />
    </Article>
  );
};

export default TweetCard;
