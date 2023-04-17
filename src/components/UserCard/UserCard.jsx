import css from '../UserCard/UserCard.module.css';
import noImage from '../../images/picture2 1.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFollow, followUser } from 'redux/slices/users';
import { isFollowUsers } from 'redux/selectors';
import { updateUserById } from 'redux/operations/users';

export default function UserCard({ item }) {
  const [following, setFollowing] = useState(true);
  const dispatch = useDispatch();
  const FollowUsers = useSelector(isFollowUsers);

  const handlerFollow = () => {
    setFollowing(!following);
    if (FollowUsers.includes(item.id)) {
      dispatch(deleteFollow(item.id));
      dispatch(updateUserById({ id: item.id, followers: item.followers - 1 }));
    } else {
      dispatch(followUser(item.id));
      dispatch(updateUserById({ id: item.id, followers: item.followers + 1 }));
    }
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
          className={FollowUsers.includes(item.id) ? css.active : css.item_btn}
          onClick={handlerFollow}
        >
          {FollowUsers.includes(item.id) ? 'Following' : 'Follow'}
        </button>
      </li>
    </>
  );
}
