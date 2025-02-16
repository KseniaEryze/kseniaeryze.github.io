import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import DropDown from '../drop-down list/DropDown';
import { logout, setUnauthenticated } from '../../store/action/userAction';
import { FaUser } from 'react-icons/fa'; // Импортируем иконку пользователя из react-icons

function Header() {
    const roleAuth = {
        master: "мастер",
        client: "клиент"
    };

    const [menuActive, setMenuActive] = useState(false);
    const [userMenuActive, setUserMenuActive] = useState(false);
    const [userMenuOpenedByClick, setUserMenuOpenedByClick] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setUnauthenticated());
    };

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
    };

    const handleUserMenuEnter = () => {
        if (!userMenuOpenedByClick) {
            setUserMenuActive(true);
        }
    };

    const handleUserMenuLeave = () => {
        if (!userMenuOpenedByClick) {
            setUserMenuActive(false);
        }
    };

    const handleUserMenuClick = () => {
        setUserMenuActive(!userMenuActive);
        setUserMenuOpenedByClick(true);
    };

    const handleDocumentClick = (e) => {
        if (userMenuActive && !e.target.closest('.user-menu')) {
            setUserMenuActive(false);
            setUserMenuOpenedByClick(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [userMenuActive]);

    return (
        <div className='wrapper_main fields'>
            <div className='wrapper_nav'>
                <a className='logo'>Logo</a>
                <DropDown />
                <nav className='wrapper_main-menu' onClick={handleMenuClick}>
                    <div
                        className={`burger-menu ${menuActive ? 'active' : ''}`}
                        onClick={handleMenuClick}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    <ul className={`${menuActive ? 'active' : ''}`}>
                        <li><Link to="/main">Главная</Link></li>
                        <li><Link to="/main">Контакты</Link></li>
                        <li><Link to="/main">Помощь</Link></li>
                        <li><Link to="/main">Отзывы</Link></li>
                    </ul>
                </nav>
            </div>
            {isAuthenticated ? (
                <div className='user-menu' onMouseEnter={handleUserMenuEnter} onMouseLeave={handleUserMenuLeave}>
                    <div className='user-icon' onClick={handleUserMenuClick}>
                        <FaUser /> {/* Иконка пользователя */}
                    </div>
                    {userMenuActive && (
                        <div className='user-dropdown'>
                            <Link to="/dashboard"> Мой профиль</Link>
                            <button onClick={handleLogout}>Выйти</button>
                        </div>
                    )}
                </div>
            ) : (
                <div className='authorization-button'>
                    <Link className='button' to={`/register?role=${roleAuth.master}`}>Вход для мастеров</Link>
                    <Link className='button' to={`/register?role=${roleAuth.client}`}>Вход для клиентов</Link>
                </div>
            )}
        </div>
    );
}

export default Header;