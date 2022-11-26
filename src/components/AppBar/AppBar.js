import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserNav } from 'components/UserNav/UserNav';
import { NavBox } from './AppBar.styled';

export const AppBar = () => {
  return (
    <NavBox>
      <Navigation />
      <AuthNav />
      <UserNav />
    </NavBox>
  );
};
