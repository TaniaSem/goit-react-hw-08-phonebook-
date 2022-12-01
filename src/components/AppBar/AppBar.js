import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks/useAuth';
import { NavBox } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <NavBox>
      <Navigation />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </NavBox>
  );
};
