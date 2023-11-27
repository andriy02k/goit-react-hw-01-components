import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.section}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) => (
                <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
                ))}
            </ul>
        </section>
    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export default Statistics