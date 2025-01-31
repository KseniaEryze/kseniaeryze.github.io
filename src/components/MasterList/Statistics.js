import React from 'react';

const Statistics = () => {
    return (
        <div className="statistics">
            <div className="statistic-item">
                <div className="statistic-icon">
                    <img src="" alt="Позитивные отзывы" />
                </div>
                <div className="statistic-info">
                    <span>83%</span>
                    <p>Положительных отзывов</p>
                    <p>36 отзывов оставили клиенты за последние 12 месяцев. Из них 25 — положительные</p>
                </div>
            </div>
            <div className="statistic-item">
                <div className="statistic-icon">
                    <img src="" alt="Средний рейтинг" />
                </div>
                <div className="statistic-info">
                    <span>4.8</span>
                    <p>Средний рейтинг</p>
                    <p>11 с акциями, 31 с примерами работ</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;