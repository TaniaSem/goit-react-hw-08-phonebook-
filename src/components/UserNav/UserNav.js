import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authorization/authOperatoins';
import { Box, ExitBtn, UserName } from './UserNav.styled';

export const UserNav = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log('Click');
    dispatch(logOut());
  };

  return (
    <Box>
      <UserName>{user.email}</UserName>
      <ExitBtn onClick={handleLogOut}>Logout</ExitBtn>
    </Box>
  );
};
