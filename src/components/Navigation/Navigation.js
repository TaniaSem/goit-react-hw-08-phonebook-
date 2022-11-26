import { Box, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Box>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
    </Box>
  );
};
