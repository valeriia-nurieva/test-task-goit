import { Thumb, Img, Line } from './Avatar.styled';

const Avatar = ({avatar}) => {
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
