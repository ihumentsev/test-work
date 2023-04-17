import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from '../Tweets/Tweets.module.css';
import UserCard from 'components/UserCard/UserCard';
import Btn from 'components/Btn/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/operations/users';
import { getTweets } from 'redux/selectors';

export default function Movies() {
  const [following, setFollowing] = useState(true);
  const [currentPage, setCarentPage] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const tweet = useSelector(getTweets);

  const handlerFollow = () => {
    setFollowing(!following);
  };

  const LoadMore = e => {
    e.preventDefault();
    let page = currentPage;
    page += 1;
    setCarentPage(page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    if (tweet.length < 12) {
      alert("We're sorry, but you've reached the end of search results.");
      setCarentPage(1);
    }
  };

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      <div className={css.container}>
        <Link to={location.state?.from ?? '/'} className={css.link}>
          &#8634; Back
        </Link>
        <ul className={css.list}>
          {tweet &&
            tweet.map(item => (
              <UserCard
                key={item.id}
                item={item}
                following={following}
                handlerFollow={handlerFollow}
              />
            ))}
        </ul>

        <Btn text="Load more" handler={LoadMore} />
      </div>
    </>
  );
}
