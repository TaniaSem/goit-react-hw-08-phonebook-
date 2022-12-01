import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/authOperatoins';
import { Box } from './UserNav.styled';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box>
      <b>{user.email}</b>
      <button onClick={handleLogOut}>Logout</button>
    </Box>
  );
};
