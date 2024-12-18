import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import DropDown from '../drop-down list/DropDown'

function Header() {
  const roleAuth = {
    master: "мастер",
    client: "клиент"
};
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
      setMenuActive(!menuActive);
    };
    const handleMenuClouseClick = () => {
        setMenuActive('');
      };
  return (
    <div className='wrapper_main fields' >
   
      <div className='wrapper_nav'>
        <a className='logo'>Logo</a>
        <DropDown></DropDown>
      <nav className='wrapper_main-menu' onClick={handleMenuClick}>  
        <div 
          className={`burger-menu ${menuActive ? 'active' : ''}`} 
          onClick={handleMenuClick}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <ul className={` ${menuActive ? 'active' : ''}`}>
            <li>
                <Link to="/main">Главная</Link>
            </li>
            <li>
                <Link to="/main">Контакты</Link>
            </li>
            <li>
                <Link to="/main">Контакты</Link>
            </li>   
            <li>
                <Link to="/main">Помощь</Link>
            </li>
            <li>
                <Link to="/main">Отзывы</Link>
            </li>

        </ul>
        
        </nav>
      </div> 
      <div>
        <Link className='button' to={`/registerUser?role=${roleAuth.master}`}>Вход для мастеров</Link>
        <Link className='button' to={`/registerUser?role=${roleAuth.client}`}>Вход для клиентов</Link>
      </div>  
</div>
  )
}

export default Header
