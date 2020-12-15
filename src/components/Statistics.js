import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
    return (
        <div>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </div>
    );
};

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};

export default Statistics;