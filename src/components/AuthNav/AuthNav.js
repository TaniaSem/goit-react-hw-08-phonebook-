import { Box, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box>
      <NavItem to="/registration">Log up</NavItem>
      <NavItem to="/login">Log in</NavItem>
    </Box>
  );
};
