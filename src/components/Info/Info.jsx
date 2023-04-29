import { Wrapper, Text } from './Info.styled';

const Info = ({ user, followers, tweets }) => {
  const formattedNumber = followers.toLocaleString('en-US', {useGrouping: true}); // "100,500"
  
  return (
    <Wrapper>
      <Text as="h2">{user}</Text>
      <Text>{tweets} tweets</Text>
      <Text>{formattedNumber} Followers</Text>
    </Wrapper>
  );
};

export default Info;
