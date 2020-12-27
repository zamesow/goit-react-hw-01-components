import PropTypes from 'prop-types';
import p from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <div className={p.profile}>
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="avatar"
          width="200"
        />
        <p className={p.name}>{name}</p>
        <p className={p.tag}>{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.item}>
          <span className="label">Followers:</span>
          <span className={p.quantity}>{statsFollowers}</span>
        </li>
        <li className={p.item}>
          <span className="label">Views:</span>
          <span className={p.quantity}>{statsViews}</span>
        </li>
        <li className={p.item}>
          <span className="label">Likes:</span>
          <span className={p.quantity}>{statsLikes}</span>
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
  statsLikes: PropTypes.number.isRequired,
};

export default Profile;
