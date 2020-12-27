import FriendListItem from '../FriendListItem/FriendListItem';
import f from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={f.friendList}>
      {/* Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве */}
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
