import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './auth.css'

function LoginPage() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state)
console.log(auth)
  return (
    <div className='wrapper-authorization'>
      <div className='wrapper-authorization_block'>
          <h1>Вход для Клиентов</h1>
          <p>
              Нет Личного Профиля?<Link to="/register"> Зарегистрироваться!</Link>
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

export default LoginPage
