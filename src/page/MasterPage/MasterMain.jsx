import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MasterPage.css';

function MasterPage() {
    const [selectedService, setSelectedService] = useState('Мой профиль'); // Изначально выбран "Мой профиль"
    const masterName = 'Иван Иванов'; // Замените на данные мастера

    const menuItems = [
        { name: 'Мой профиль', id: 0, link: 'profile' },
        { name: 'Сообщения', id: 1, link: 'messages' },
        { name: 'Адрес', id: 2, link: 'address' },
        { name: 'Заказы', id: 3, link: 'orders' },
        { name: 'Настройки', id: 4, link: 'settings',  isBelow: true },
        { name: 'Уведомления', id: 5, link: 'notifications', isBelow: true },
    ];


    const handleServiceChange = (service) => {
        setSelectedService(service.name);
    };

    return (
        <div className="master-page">
            <div className="sidebar">
                {/* Дополнительное меню */}
                <div className="sidebar-top">
                    <div className="master-info">
                        <span className="master-name">{masterName}</span>
                        <hr />
                    </div>
                    <ul className="sidebar-list">
                        {menuItems.filter(item => !item.isBelow).map(item => (
                            <li key={item.id}
                                className={selectedService === item.name ? 'active' : ''}
                                onClick={() => handleServiceChange(item)}>
                                <Link to={`/master/${item.link}`}> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Уведомления внизу */}
                <div className="sidebar-bottom">
                <ul className="sidebar-list">
                   {menuItems.filter(item => item.isBelow).map(item => (
                        <li key={item.id}
                             className={selectedService === item.name ? 'active' : ''}
                             onClick={() => handleServiceChange(item)}>
                         <Link to={`/master/${item.link}`}> {item.name}</Link>
                     </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <h1>Личный кабинет мастера {masterName}</h1>
                </div>

                {/* Основной контент (меняется в зависимости от выбранной услуги) */}
                <div className="service-content">
                    {selectedService === 'Мой профиль' && (
                        <div>
                            <h2>Мой профиль</h2>
                            {/* Ваше содержимое про мой профиль */}
                            <p>Информация о мастере здесь.</p>
                        </div>
                    )}
                    {selectedService === 'Сообщения' && (
                        <div>
                            <h2>Сообщения</h2>
                            {/* Ваше содержимое про сообщения */}
                            <p>Список сообщений здесь.</p>
                        </div>
                    )}
                    {selectedService === 'Адрес' && (
                        <div>
                            <h2>Адрес</h2>
                            {/* Ваше содержимое про адрес */}
                            <p>Адрес мастера здесь.</p>
                        </div>
                    )}
                     {selectedService === 'Заказы' && (
                        <div>
                            <h2>Заказы</h2>
                            {/* Ваше содержимое про заказы */}
                           <p>Список заказов здесь.</p>
                        </div>
                    )}
                    {selectedService === 'Настройки' && (
                        <div>
                            <h2>Настройки</h2>
                            {/* Ваше содержимое про настройки */}
                             <p>Настройки мастера здесь.</p>
                        </div>
                    )}
                    {selectedService === 'Уведомления' && (
                        <div>
                            <h2>Уведомления</h2>
                            {/* Ваше содержимое про уведомления */}
                            <p>Уведомления здесь.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MasterPage;