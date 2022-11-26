import styled from 'styled-components';

export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 30px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #eee;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
