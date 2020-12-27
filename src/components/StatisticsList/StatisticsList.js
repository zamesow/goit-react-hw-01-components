import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';
import sl from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  console.log({ outline: '1px solid red' });
  return (
    <section className={sl.profile}>
      <h2 className={sl.title}>"Upload stats"</h2>

      <ul className={sl.profile}>
        {stats.map(stat => (
          <li className={sl.item} key={stat.id}>
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
