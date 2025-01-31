import React from 'react';

const FilterOptions = () => {
    return (
        <div className="filter-options">
        <select className="filter-select">
            <option>Выбрать специалиста</option>
            <option>Мастер 1</option>
            <option>Мастер 2</option>
            <option>Мастер 3</option>
        </select>
        <select className="filter-select">
            <option>Выбрать услуги</option>
            <option>Услуга 1</option>
            <option>Услуга 2</option>
            <option>Услуга 3</option>
        </select>
        <select className="filter-select">
            <option>Выбрать дату и время</option>
            <option>10 октября, 10:00</option>
            <option>11 октября, 14:00</option>
            <option>12 октября, 16:00</option>
        </select>
        <select className="filter-select">
            <option>Цена</option>
            <option>До 50 руб.</option>
            <option>50-100 руб.</option>
            <option>100 руб. и выше</option>
        </select>
        <button className="book-button">Записаться</button>
    </div>
    );
};

export default FilterOptions;
