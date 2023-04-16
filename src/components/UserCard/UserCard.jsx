import css from '../UserCard/UserCard.module.css';
import noImage from '../../images/picture2 1.png';
import { useState } from 'react';

export default function UserCard({ item }) {
  const [following, setFollowing] = useState(true);

  const handlerFollow = () => {
    setFollowing(!following);
  };
  return (
    <>
      <li className={css.item} key={item.id}>
        <img
          className={following ? css.img : css.img_follow}
          alt="icon"
          src={noImage}
        ></img>
        <div className={css.center_line}>
          <div className={css.img_wraper}>
            {item.avatar !== '' && (
              <img
                className={css.avatar_img}
                src={item.avatar}
                alt="avatarIcon"
              ></img>
            )}
          </div>
        </div>

        <p className={css.tweets}> {item.tweets} tweets</p>
        <p className={css.followers}>
          {item.followers.toLocaleString('en-GB')} Followers
        </p>
        <button
          className={following ? css.item_btn : css.active}
          onClick={handlerFollow}
        >
          {following ? 'Follow' : 'Following'}
        </button>
      </li>
    </>
  );
}
