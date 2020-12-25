import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

// const Notification = ({ text }) => {
    // без сomposes в css (композиция)
    // const classNames = [styles.notification, styles.error];
    // return <p className={classNames.join(' ')}>{text}</p>
// };

// если передавать тип, то его указываем в App
const Notification = ({ text, type = 'success' }) => {
    return <p className={styles[type]}>{text}</p>
};

Notification.defaultProps = {
    type: 'success',
};

Notification.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error']),
};

export default Notification;