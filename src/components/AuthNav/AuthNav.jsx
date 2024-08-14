import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const getClassName = ({ isActive }) => clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <NavLink className={getClassName} to={'/register'}>
        Register
      </NavLink>
      <NavLink className={getClassName} to={'/login'}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;