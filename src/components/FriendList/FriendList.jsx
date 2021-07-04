import { GrStatusGoodSmall } from 'react-icons/gr';
import PropTypes from 'prop-types';
import defaultImage from '../../default.jpg';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(el => (
        <li key={el.id} className={s.item}>
          <GrStatusGoodSmall
            className={`${s.icon} ${el.isOnline && s.online}`}
          />
          <img className={s.avatar} src={el.avatar} alt={el.name} width="48" />
          <p className={s.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  avatar: defaultImage,
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
