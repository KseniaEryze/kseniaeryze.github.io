import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../authUser.css'
import fakeData from '../fakeData.js'

function LoginPageUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  // const [showPassword, setShowPassword] = useState(false);

  
  const handleSubmit = (e) => {
      e.preventDefault();
      
      const user = fakeData(login, pass)


      if (user) {
          dispatch({
              type: 'LOGIN',
              payload: { user: { login: user.login, role: user.role } },
          });
          console.log( user.login)
          if (user.role === 'admin') {
              navigate('/');
          } else {
              navigate('/');
          }
      } else {
          setError('Неправильно указан логин и пароль');
          console.log(error)
      }
  };
  

  // const toggleShowPassword = () => {
  //     setShowPassword(!showPassword)
  // }

  if (isAuthenticated) {
      navigate('/');
      return null;
  }


  const isValidation = () => {
      return login !== '' && pass !== '';
  };

  


  return (
    <div className='wrapper-authorization'>
      <div className='wrapper-authorization_block'>
          <h1>Вход для Клиентов</h1>
          <p>
              Нет Личного Профиля?<Link to="/registerUser"> Зарегистрироваться!</Link>
          </p>
        <form onSubmit={() => handleSubmit()}>
          <div className='wrapper-form'>
            <input
              className='wrapper-form_input'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Email или Номер телефона"
             
            />
            <input 
              className='wrapper-form_input'
              style={{border:error ? '2px solid red': '#F04438'}}
              type="password"
              value={pass}
              onChange = {(e) => setPass(e.target.value)}
              placeholder="Пароль"
             
            />
            <Link to='/'>Забыли пароль?</Link>
            <button
               className={isValidation() ? 'SignInFormBtn' : 'disabledButton'} 
                type="submit" 
                disabled={!isValidation()}>Войти
            </button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default LoginPageUser
