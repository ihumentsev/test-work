import { useEffect } from 'react';
import { useState } from 'react';
import * as API from 'Services/API';
import { Link, useLocation } from 'react-router-dom';
import css from '../Tweets/Tweets.module.css';
import UserCard from 'components/UserCard/UserCard';
import Btn from 'components/Btn/Btn';

export default function Movies() {
  const [tweets, setTweets] = useState([]);
  const [following, setFollowing] = useState(true);
  const [currentPage, setCarentPage] = useState(1);
  const location = useLocation();
  console.log(currentPage);
  const handlerFollow = () => {
    setFollowing(!following);
  };

  const LoadMore = () => {
    let page = currentPage;
    page += 1;
    setCarentPage(page);
    if (tweets.length < 12) {
      alert("We're sorry, but you've reached the end of search results.");
      setCarentPage(1);
    }
  };

  useEffect(() => {
    API.fetchTrendMovies(currentPage).then(res => {
      console.log(res);
      setTweets(res);
    });
  }, [currentPage]);

  return (
    <>
      <div className={css.container}>
        <Link to={location.state?.from ?? '/'} className={css.link}>
          &#8634; Back
        </Link>
        <ul className={css.list}>
          {tweets.map(item => (
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
