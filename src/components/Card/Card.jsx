import Article from './Card.styled';
import Logo from 'components/Logo';
import Background from 'components/Background';
import Avatar from 'components/Avatar';
import Info from 'components/Info';
import FollowingButton from 'components/FollowingButton';

const Card = () => {
  return (
    <Article>
      <Logo/>
      <Background />
      <Avatar />
      <Info/>
      <FollowingButton />
    </Article>
  );
};

export default Card;
