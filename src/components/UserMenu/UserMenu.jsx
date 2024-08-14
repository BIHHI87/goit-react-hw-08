import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p>Welcome, {user.name}</p>
      <Button variant="outlined" onClick={handleLogout} className={css.btn}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;