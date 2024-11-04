import React from 'react'
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom'
import './auth.css'

function RegisterPage() {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state);

  return (
    <div className='wrapper-authorization'>
    <div className='wrapper-authorization_block'>
      <h1>Регистрация для клиентов</h1>
      <p>      
          Уже есть Личный Профиль?<Link to="/login"> Войти</Link>
      </p>
       
      <div className='wrapper-form'>
            <input
              className='wrapper-form_input'
              type="emaill"
              value={''}
        
              placeholder="Email или Номер телефона"
            />
            <input 
              className='wrapper-form_input'
              type="password"
              value={''}
          
              placeholder="Пароль"
            />
            <Link to='/'>Забыли пароль?</Link>
            <button className='wrapper-form_button'
            
            >
              {}
            </button>
          </div>
    </div>
    </div>

  )
}

export default RegisterPage
