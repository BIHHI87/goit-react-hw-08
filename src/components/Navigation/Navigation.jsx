import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

const getClassName = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigation}>
        <li>
          <NavLink className={getClassName} to={'/'}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink className={getClassName} to={'/contacts'}>
              Contacts
            </NavLink>
          </li>
        )}
    </nav>
  );
};

export default Navigation;