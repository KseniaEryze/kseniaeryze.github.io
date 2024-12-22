import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './header.css';
import DropDown from '../drop-down list/DropDown';
import { logout, setUnauthenticated } from '../../store/action/userAction';
  
function Header() {
    const roleAuth = {
        master: "мастер",
        client: "клиент"
    };

    const [menuActive, setMenuActive] = useState(false);
    const [userMenuActive, setUserMenuActive] = useState(false);
  

    const dispatch = useDispatch();  
    
    const handleLogout = () => {
        dispatch(setUnauthenticated());
    };
     
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
    };

    const handleUserMenuClick = () => {
        setUserMenuActive(!userMenuActive);
    };


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
                <div className='user-menu' onMouseEnter={handleUserMenuClick} onMouseLeave={handleUserMenuClick}>
                    <div className='user-icon' onClick={handleUserMenuClick}>
                      
                    </div>
                    {userMenuActive && (
                        <div className='user-dropdown'>
                            <Link to="/profile">Профиль</Link>
                            <Link to="/settings">Настройки</Link>
                            <button onClick={handleLogout}>Выйти</button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <Link className='button' to={`/register?role=${roleAuth.master}`}>Вход для мастеров</Link>
                    <Link className='button' to={`/register?role=${roleAuth.client}`}>Вход для клиентов</Link>
                </div>
            )}
        </div>
    );
}

export default Header;