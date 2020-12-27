import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">"Upload stats"</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
