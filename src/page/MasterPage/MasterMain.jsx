import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Импорт useSelector для получения состояния из Redux store
import './MasterPage.css';
import star from '../../assets/star.png';
import feedback from '../../assets/feedback.png';
import instagram from '../../assets/instagram.png';
import userPhoto from '../../assets/lake_mountain_tree_36589_2650x1600.jpg';
import check_mark from '../../assets/SVG (1).png'
import check_mark2 from '../../assets/SVG (2).png'
import { FaEdit, FaSave, FaPlus, FaMinus } from 'react-icons/fa'; // Импортируем иконки из библиотеки react-icons
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider';
import { setClients, addClientMessage } from '../../store/action/clientAction'; // Импортируем действия для клиентов


function MasterPage() {
    const userRole = useSelector((state) => state.auth.user?.role); 
    const isMaster = userRole === 'master'; 
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.clients.clients);


    const [selectedService, setSelectedService] = useState('Мой профиль');
    const [editingBlock, setEditingBlock] = useState(null); 
    const [texts, setTexts] = useState({
        about: `Мастер с опытом работы 6 лет! Профессиональная стерилизация инструментов. Для каждого
                клиента используется индивидуальная пилка. Работы на качественных материалах.
                Выполняю маникюр, ремонт ногтей, наращивание, педикюр, все виды дизайнов.
                Маникюр с покрытием и любым дизайном 40 br Наращивание с покрытием и любым дизайном
                50 br Педикюр (только пальчики покрытие) 40 br Педикюр (обработка стоп и пальчики
                с покрытием) 50 br`,
        address: `Ул. Независимости 58\nЦентральный Район`,
        education: [
            "Университет Маникюра и Педикюра, 2010-2014",
            "Курсы по наращиванию ногтей, 2015",
            "Сертификат по дизайну ногтей, 2016"
        ]
    });

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

    const handleEditClick = (block) => {
        if (editingBlock === block) {
            setEditingBlock(null); // Если уже редактируется этот блок, то выходим из режима редактирования
        } else {
            setEditingBlock(block); // Иначе начинаем редактирование этого блока
        }
    };

    const handleTextChange = (block, value) => {
        setTexts({ ...texts, [block]: value });
    };

    const handleEducationChange = (index, value) => {
        const newEducation = [...texts.education];
        newEducation[index] = value;
        setTexts({ ...texts, education: newEducation });
    };

    const addEducation = () => {
        const newEducation = [...texts.education, ""];
        setTexts({ ...texts, education: newEducation });
    };

    const removeEducation = (index) => {
        const newEducation = texts.education.filter((_, i) => i !== index);
        setTexts({ ...texts, education: newEducation });
    };

    const handleSendMessage = (clientId, message) => {
        dispatch(addClientMessage(clientId, message));
    };
  const renderContent = () => {
        switch (selectedService) {
            case 'Мой профиль':
                return (
                    <>
                        <div className="info-container">
                            <div className='info-container_header'>
                            <h2>О себе</h2>   
                            {isMaster && (
                                <div className="edit-button">
                                    <button onClick={() => handleEditClick('about')}>
                                        {editingBlock === 'about' ? <FaMinus /> : <FaPlus />}
                                    </button>
                                </div>
                            )}
                            </div>
                            {editingBlock === 'about' ? (
                                <textarea
                                    value={texts.about}
                                    onChange={(e) => handleTextChange('about', e.target.value)}
                                />
                            ) : (
                                <p>{texts.about}</p>
                            )}
                        </div>
                        <div className="info-container">
                            
                            <div className='info-container_header'>
                                <div className="address-info horizontal">
                                    <h2>Районы и Адреса</h2>
                                    <p>Показать на Карте</p>
                                </div>
                                {isMaster && (
                                <div className="edit-button">
                                    <button onClick={() => handleEditClick('address')}>
                                        {editingBlock === 'address' ? <FaMinus /> : <FaPlus />}
                                    </button>
                                </div>
                                )}
                            </div>
                            {editingBlock === 'address' ? (
                                <textarea
                                    value={texts.address}
                                    onChange={(e) => handleTextChange('address', e.target.value)}
                                />
                            ) : (
                                <div className="address-info vertical">
                                    <h2>Мой Адрес</h2>
                                    <p>{texts.address.split('\n')[0]}</p>
                                </div>
                            )}
                            {editingBlock !== 'address' && (
                                <div className="address-info vertical">
                                    <h2>Выезд к Клиенту</h2>
                                    <p>{texts.address.split('\n')[1]}</p>
                                </div>
                            )}
                        </div>
                           <div className="info-container">
                           
                           
                            <div className='info-container_header'>
                                <h2>Образование</h2> 
                                {isMaster && (
                                    <div className="edit-button">
                                        <button onClick={() => handleEditClick('education')}>
                                            {editingBlock === 'education' ? <FaMinus /> : <FaPlus />}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {editingBlock === 'education' ? (
                                <div>
                                    {texts.education.map((edu, index) => (
                                        <div key={index} className="education-item_edit">
                                            <input
                                                type="text"
                                                value={edu}
                                                onChange={(e) => handleEducationChange(index, e.target.value)}
                                            />
                                            <button type="button" onClick={() => removeEducation(index)}>
                                                <FaMinus />
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addEducation}>
                                        <FaPlus /> Добавить образование
                                    </button>
                                </div>
                            ) : (
                                <ul className='education-item'>
                                    {texts.education.map((edu, index) => (
                                            <li key={index}><img src={check_mark}/>{edu}</li>
                                    ))}
                                </ul>
                            )}
                        </div>  
                        <div className="info-container">
                            <h2>Документы</h2>
                            <PortfolioSlider isMaster={isMaster} type="documents" />
                        </div>
                        <div className="info-container">
                            <h2>Услуги и цены</h2>
                            
                        </div>
                        
                        <div className="info-container">
                            <h2>Портфолио</h2>
                            <PortfolioSlider isMaster={isMaster} type="portfolio" />
                        </div>
                       
                    </>
                );
                case 'Сообщения':
                    return (
                        <div className="info-container">
                            <h2>Сообщения</h2>
                            <div className="client-list">
                                {clients.map((client) => (
                                    <div key={client.id} className="client-item">
                                        <h3>{client.name}</h3>
                                        <div className="messages">
                                            {client.messages.map((message, index) => (
                                                <p key={index}>{message}</p>
                                            ))}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Отправить сообщение"
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSendMessage(client.id, e.target.value);
                                                    e.target.value = '';
                                                }
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                case 'Адрес':
                    return (
                        <div className="info-container">
                            <h2>Адрес</h2>
                            {/* Ваше содержимое про адрес */}
                        </div>
                    );
                case 'Заказы':
                    return (
                        <div className="info-container">
                            <h2>Заказы</h2>
                            {/* Ваше содержимое про заказы */}
                        </div>
                    );
                case 'Настройки':
                    return (
                        <div className="info-container">
                            <h2>Настройки</h2>
                            {/* Ваше содержимое про настройки */}
                        </div>
                    );
                case 'Уведомления':
                    return (
                        <div className="info-container">
                            <h2>Уведомления</h2>
                            {/* Ваше содержимое про уведомления */}
                        </div>
                    );
                default:
                    return null;
            }
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
                                    {item.name}
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
                                    {item.name}
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
                            {/* {isMaster && (
                                <div className="edit-button">
                                    <button onClick={() => handleEditClick('user-info')}>
                                        {editingBlock === 'user-info' ? <FaSave /> : <FaEdit />}
                                    </button>
                                </div>
                            )} */}
                        </div>
                    </div>
                    {renderContent()}
                </div>
            </div>
        );
    }
    
    export default MasterPage;