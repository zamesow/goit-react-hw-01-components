import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
