import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ stats }) {
    return (
        <section class="statistics">
            <h2 class="title">"Upload stats"</h2>

            <ul class="stat-list">
                {stats.map(stat => (
                    <li class="item" key={stat.id}>
                        <Statistics
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>
                ))}
            </ul>
            
        </section>
    );
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default StatisticsList;