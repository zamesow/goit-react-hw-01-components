import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, statsFollowers, statsViews, statsLikes }) => {
    return (
        <div class="profile">
            <div class="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    class="avatar"
                />
                <p class="name">{name}</p>
                <p class="tag">{tag}</p>
                <p class="location">{location}</p>
            </div>

            <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{statsFollowers}</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">{statsViews}</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{statsLikes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired
};

export default Profile;