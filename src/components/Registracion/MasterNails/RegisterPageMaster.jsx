import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../authUser.css'
import fakeUsers from '../fakeData';

function RegisterPageMaster() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
  
    return (
      <div className='wrapper-authorization'>
      <div className='wrapper-authorization_block'>
        <h1>Регистрация для мастеров</h1>
        <p>      
            Уже есть Личный Профиль?<Link to="/loginMaster"> Войти</Link>
        </p>
      <form className='wrapper-form'>
      <div>
        <div className='wrapper-submit'>
              <input
                className='wrapper-form_input'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Имя"
              />
              <input 
                className='wrapper-form_input'
                type="text"
                value={pass}
                onChange = {(e) => setPass(e.target.value)}
                placeholder="Фамилия"
              />
        </div>    
        <div>
              <input
                className='wrapper-form_input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email или Номер телефона"
              />
              <input 
                className='wrapper-form_input'
                type="password"
                value={pass}
                onChange = {(e) => setPass(e.target.value)}
                placeholder="Пароль"
              />
        </div>  
        </div>

            <Link to='/'>Забыли пароль?</Link>
              <button className='wrapper-form_button'>
                Зарегистрироваться
              </button>
        
              
      </form>
    </div>
  
  </div>
      
  
    )
}

export default RegisterPageMaster
