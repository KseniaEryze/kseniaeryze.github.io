import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { login } from '../../../store/action/userAction';
import '../authUser.css';

function RegisterPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'неизвестная роль';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Инициализируем начальные значения для userData
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');

  const validateRegistrationForm = (userData) => {
    let errors = '';

    if (!userData.login) {
      errors = 'Имя обязательно.';
    } else if (userData.login.length < 8) {
      errors = 'Логин должен быть не менее 8 символов.';
    }

    if (!userData.password) {
      errors = 'Пароль обязателен.';
    } else if (userData.password.length < 8) {
      errors = 'Пароль должен быть не менее 8 символов.';
    } else {
      const hasUpperCase = /[A-Z]/.test(userData.password);
      const hasLowerCase = /[a-z]/.test(userData.password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(userData.password);

      if (!hasUpperCase) {
        errors = 'Пароль должен содержать хотя бы одну заглавную букву.';
      } else if (!hasLowerCase) {
        errors = 'Пароль должен содержать хотя бы одну строчную букву.';
      } else if (!hasSpecialChar) {
        errors = 'Пароль должен содержать хотя бы один специальный символ (!@#$%^&*(),.?":{}|<>)';
      }
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateRegistrationForm(userData);

    if (errors) {
      setError(errors);
      return;
    }

    try {
      await dispatch(login(userData)); // Отправка действия
      navigate('/'); // Перенаправление на главную страницу
    } catch (err) {
      console.error('Ошибка регистрации:', err);
      setError('Ошибка регистрации, попробуйте еще раз');
      // Можно добавить обработку ошибок, например, отобразить сообщение об ошибке
    }
  };

  return (
    <div className="wrapper-authorization">
      <div className="wrapper-authorization_block">
        <h1>Регистрация для {role}а</h1>
        <p>
          Уже есть Личный Профиль? <Link to={`/login?role=${role}`}>Войти</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="wrapper-form">
            <input
              className="wrapper-form_input"
              style={{ border: error ? '2px solid red' : '' }}
              name="login"
              value={userData.login}
              onChange={handleChange}
              placeholder="Email или Номер телефона"
            />
            <input
              className="wrapper-form_input"
              style={{ border: error ? '2px solid red' : '' }}
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            {error && <p className='error-message'>{error}</p>}
            <Link to="/">Забыли пароль?</Link>
            <button className="wrapper-form_button">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;