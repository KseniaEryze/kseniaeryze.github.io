import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MasterPage.css';
import star from '../../assets/star.png'; 
import feedback from '../../assets/feedback.png'; 
import instagram from '../../assets/instagram.png'; 
import userPhoto from '../../assets/lake_mountain_tree_36589_2650x1600.jpg'

function MasterPage() {
    const [selectedService, setSelectedService] = useState('Мой профиль'); 
    const masterName = 'Иван Иванов';
    const lastActive = '2 часа назад'; 
    const rating = 4.5; 
    const reviewsCount = 120; 

    const menuItems = [
        { name: 'Мой профиль', id: 0, link: 'profile' },
        { name: 'Сообщения', id: 1, link: 'messages' },
        { name: 'Адрес', id: 2, link: 'address' },
        { name: 'Заказы', id: 3, link: 'orders' },
        { name: 'Настройки', id: 4, link: 'settings', isBelow: true },
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
                            <li
                                key={item.id}
                                className={selectedService === item.name ? 'active' : ''}
                                onClick={() => handleServiceChange(item)}
                            >
                                <Link to={`/master/${item.link}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Уведомления внизу */}
                <div className="sidebar-bottom">
                    <ul className="sidebar-list">
                        {menuItems.filter(item => item.isBelow).map(item => (
                            <li
                                key={item.id}
                                className={selectedService === item.name ? 'active' : ''}
                                onClick={() => handleServiceChange(item)}
                            >
                                <Link to={`/master/${item.link}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <div className="user-info_wrapper">
                        <div className='user-info'>
                            <div className="user-photo-container">
                                <img src={userPhoto} alt="User" className="user-photo" /> {/* Замените на путь к фото пользователя */}
                            </div>
                            <div className="user-details-container">
                                <div className="user-details-name">
                                    <h2>{masterName}</h2>
                                    <p>Последний визит: {lastActive}</p>
                                </div>
                                <div className="user-additional-info">
                                    <div className="rating-feedback-block">
                                        <img src={star} alt="Star" /> {rating}
                                        <img src={feedback} alt="Feedback" /> {reviewsCount}
                                    </div>
                                    <a href="https://www.instagram.com/your_profile/" target="_blank" rel="noopener noreferrer">
                                        <img src={instagram} alt="Instagram" /> Instagram
                                    </a>
                                
                                </div>
                                
                            </div> 
                            
                        </div>
                       <div className="user-actions">
                            <button className="contact-button">Связаться</button>
                        </div>
                        
                    </div>
                    {/* {selectedService === 'Адрес' && ( */}
                        <div className="address-container">
                            <div className="address-info horizontal">
                                <h2>Районы и Адреса</h2>
                                <p>Показать на Карте</p>
                            </div>
                            <div className="address-info vertical">
                                <h2>Мой Адрес</h2>
                                <p>Ул. Независимости 58</p>
                            </div>
                            <div className="address-info vertical">
                                <h2>Выезд к Клиенту</h2>
                                <p>Центральный Район</p>
                            </div>
                        </div>
                    {/* )} */}
                    <div className="address-container">
                        <h2>О себе</h2>
                        <p>Мастер с опытом работы 6 лет! Профессиональная стерилизация инструментов. Для каждого
                            клиента используется индивидуальная пилка. Работы на качественных материалах.
                            Выполняю маникюр, ремонт ногтей, наращивание, педикюр, все виды дизайнов.
                            Маникюр с покрытием и любым дизайном 40 br Наращивание с покрытием и любым дизайном
                            50 br Педикюр (только пальчики покрытие) 40 br Педикюр (обработка стоп и пальчики
                            с покрытием) 50 br
                        </p>
                    </div>
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
                        </div>
                    )}
                    {selectedService === 'Адрес' && (
                        <div>
                            <h2>Адрес</h2>
                            {/* Ваше содержимое про адрес */}
                        </div>
                    )}
                    {selectedService === 'Заказы' && (
                        <div>
                            <h2>Заказы</h2>
                            {/* Ваше содержимое про заказы */}
                        </div>
                    )}
                    {selectedService === 'Настройки' && (
                        <div>
                            <h2>Настройки</h2>
                            {/* Ваше содержимое про настройки */}
                        </div>
                    )}
                    {selectedService === 'Уведомления' && (
                        <div>
                            <h2>Уведомления</h2>
                            {/* Ваше содержимое про уведомления */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MasterPage;