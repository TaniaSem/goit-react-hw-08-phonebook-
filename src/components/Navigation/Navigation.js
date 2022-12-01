import { useAuth } from 'hooks/useAuth';
import { Box, NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      <NavItem to="/" end>
        Home
      </NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </Box>
  );
};
