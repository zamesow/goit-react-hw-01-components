import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ label, percentage }) => {
  return (
    <div className={s.profile}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
