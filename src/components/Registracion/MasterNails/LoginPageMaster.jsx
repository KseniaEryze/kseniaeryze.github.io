import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../authUser.css'
import fakeUsers from '../fakeData';

function LoginPageMaster() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
   console.log(error)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = fakeUsers.find((u) => u.username === login && u.password === pass); //запрос к базе
        // console.log('Вошел как', user.role)
        if (user) {
            dispatch({
                type: 'LOGIN',
                payload: { user: { username: user.username, role: user.role } },
            });
           
           
        } else {
            setError('Неправильно указан логин и пароль');
        }
    };

    // if (isAuthenticated) {
    //     // navigate('/dashBoard');
    //     return null;
    // }


  return (
    <div className='wrapper-authorization'>
      <div className='wrapper-authorization_block'>
          <h1>Вход для Мастеров</h1>
          <p>
              Нет Личного Профиля?<Link to="/registerMaster"> Зарегистрироваться!</Link>
          </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='wrapper-form'>
            <input
              className='wrapper-form_input'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Email или Номер телефона"
            />
            <input 
              className='wrapper-form_input'
              type="password"
              value={pass}
              onChange = {(e) => setPass(e.target.value)}
              placeholder="Пароль"
            />
            <Link to='/'>Забыли пароль?</Link>
            <button className='wrapper-form_button'>
              Войти
            </button>
          </div>
        </form> 
      </div>
    </div>
  )

}

export default LoginPageMaster
