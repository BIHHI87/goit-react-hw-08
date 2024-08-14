import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu, AuthNav } from '../index';
import { AppBar as AppBarHeader } from '@mui/material';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBarHeader className={css.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
};

export default AppBar;