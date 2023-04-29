import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #373737;;
`;

export const StyledLink = styled(NavLink)`
  padding: 14px 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out;
  :hover {
    box-shadow: rgb(255 0 134 / 50%) 0px 8px 43px;
  }
  &.active {
    background-color: #5cd3a8;
  }
  :not(:last-child) {
    margin-right: 12px;
  }
`;
