import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #064927;
  font-size: 20px;
  font-weight: 700;
  &.active {
    color: red;
    :hover {
      text-decoration: underline;
    }
  }
  :hover:not(.active),
  :focus:not(.active) {
    text-decoration: underline;
  }
`;
