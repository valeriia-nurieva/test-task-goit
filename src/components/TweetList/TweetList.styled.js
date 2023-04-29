import styled from 'styled-components';

export const TweetBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const TweetItem = styled.li`
  width: 100%;
  @media (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }
  @media (min-width: 1200px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
