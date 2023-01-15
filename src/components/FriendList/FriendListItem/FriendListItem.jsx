import styles from './friend-list-item.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.active : styles.status}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar "
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
