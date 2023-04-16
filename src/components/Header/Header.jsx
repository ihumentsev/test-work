import css from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  const setActiveLink = ({ isActive }) => {
    return !isActive ? css.navLink : `${css.navLink} ${css.active}`;
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink end to="/" className={setActiveLink}>
            Home
          </NavLink>
          <NavLink to="tweets" className={setActiveLink}>
            Tweets
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
