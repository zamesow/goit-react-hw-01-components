import React from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.module.css';

console.log(styles);
// const styles = {
//     width: 1170,
//     outline: "3px solid tomato",
//     border: '5px solid blue'
// };

const Panel = ({ title, children }) => (
    <div className={styles.container}>
        {/* если условие слева true, то справа выполняется */}
    {title && <h2>{title}</h2>}
        
    {children}
</div>
);

Panel.defaultProps = {
    title: '',
    children: [],
};

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Panel;