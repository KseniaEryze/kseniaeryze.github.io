import React, { useState } from 'react'
import { useDispatch  } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../store/action/userAction';
import '../authUser.css'

function RegisterPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await dispatch(login({ email, pass })); // Отправка действия
      navigate('/'); // Перенаправление на главную страницу
      console.log('вы зарегестрированы')
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      // Можно добавить обработку ошибок, например, отобразить сообщение об ошибке
    }
  };

  console.log(dispatch)
  return (
    <div className='wrapper-authorization'>
    <div className='wrapper-authorization_block'>
      <h1>Регистрация для клиентов</h1>
      <p>      
          Уже есть Личный Профиль?<Link to="/loginUser"> Войти</Link>
      </p>
    <form onSubmit={handleSubmit}>
      <div className='wrapper-form'>
            <input
              className='wrapper-form_input'
              style={{border:error ? '2px solid red': '#F04438'}}    
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button className='wrapper-form_button'>
              Зарегистрироваться
            </button>
      </div>     
    </form>
  </div>

</div>
    

  )
}

export default RegisterPage
