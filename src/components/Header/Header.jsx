import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import DropDown from '../drop-down list/DropDown'

function Header() {
  return (
    <div className='wrapper_main fields'>
   

    <nav className='wrapper_main-menu'> 
    <a className='logo'>Logo</a>
        <DropDown></DropDown>
        <ul>
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
    <div>
      <Link className='button' to = '/'>Вход для мастеров</Link>
      <Link className='button' to = '/register'>Вход для клиентов</Link>
    </div>  
    </div>
  )
}

export default Header
