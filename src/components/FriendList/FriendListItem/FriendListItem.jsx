import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
import defaultImage from '../../../default.jpg';
import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <GrStatusGoodSmall className={`${s.icon} ${isOnline && s.online}`} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
