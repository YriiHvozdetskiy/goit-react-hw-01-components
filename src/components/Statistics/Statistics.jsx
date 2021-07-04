import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            style={{
              backgroundColor: randomRgb(),
            }}
            className={s.item}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      performance: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
