import React from 'react';
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.cont}>
            {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map((id, label, percentage) => (
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
                ))}
            </ul>
        </section>
    );
};

export default Statistics