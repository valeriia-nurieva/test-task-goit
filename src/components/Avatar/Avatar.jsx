import { Thumb, Img, Line } from './Avatar.styled';
import avatar from 'images/avatar.png';

const Avatar = () => {
  return (
    <>
      <Line />
      <Thumb>
        <Img src={avatar} alt="User avatar" />
      </Thumb>
    </>
  );
};

export default Avatar;
