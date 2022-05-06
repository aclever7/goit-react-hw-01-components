import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section className="section">
      <h2 className={s.title}>Friends</h2>
      <ul className={s.fList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
