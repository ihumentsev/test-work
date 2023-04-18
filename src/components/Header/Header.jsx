import css from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from 'redux/slices/users';
export const Header = () => {
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();

  const filterHandler = e => {
    setFilter(e.target.value);
  };
  const setActiveLink = ({ isActive }) => {
    return !isActive ? css.navLink : `${css.navLink} ${css.active}`;
  };

  useEffect(() => {
    dispatch(filterUser(filter));
  }, [dispatch, filter]);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.nav}>
          <NavLink end to="/" className={setActiveLink}>
            Home
          </NavLink>
          <NavLink to="/tweets" className={setActiveLink}>
            Tweets
          </NavLink>
          <div className={css.dropdown}>
            <button className={css.dropbtn}>Filters</button>
            <div className={css.dropdown_content}>
              <ul className={css.dropdown_list}>
                <li className={css.dropdown_item}>
                  <input
                    className={css.dropdown_input}
                    id="1"
                    type="radio"
                    name="filter"
                    value="all"
                    onChange={filterHandler}
                    defaultChecked
                  />
                  <label className={css.dropdown_label} htmlFor="1">
                    all
                  </label>
                </li>
                <li className={css.dropdown_item}>
                  <input
                    className={css.dropdown_input}
                    id="2"
                    type="radio"
                    name="filter"
                    value="follow"
                    onChange={filterHandler}
                  />
                  <label className={css.dropdown_label} htmlFor="2">
                    follow
                  </label>
                </li>
                <li className={css.dropdown_item}>
                  <input
                    className={css.dropdown_input}
                    id="3"
                    type="radio"
                    name="filter"
                    value="following"
                    onChange={filterHandler}
                  />
                  <label className={css.dropdown_label} htmlFor="3">
                    foloowing
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
