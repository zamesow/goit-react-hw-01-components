import Friend from './Friend';

function FriendList() {
    return (
        <ul class="friend-list">
            {/* Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве */}
            <Friend />
        </ul>
    );
}

export default FriendList;