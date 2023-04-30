import styled from 'styled-components';

export const WelcomePageBox = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 136px);
  @media (min-width: 768px) {
    height: calc(100vh - 68px);
  }
`;
export const Hero = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.2;
  color: #373737;
  width: 348px;
  text-align: center;
  @media (min-width: 768px) {
    width: 736px;
  }
`;
