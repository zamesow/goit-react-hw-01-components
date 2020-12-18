import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </div>
    );
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;