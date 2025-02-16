import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { login as loginAction, setAuthenticated } from '../../../store/action/userAction';
import '../authUser.css';
import { findUsers } from '../fakeData';

function LoginPageUser() {
    const [searchParams] = useSearchParams();
    let role = searchParams.get('role') || 'неизвестная роль';

    // Установим роль по умолчанию, если она неизвестна
    if (role === 'неизвестная роль') {
        role = searchParams.get('client') || 'клиент'; // Установим роль по умолчанию
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.user?.role);

    const [login, setLogin] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            if (userRole === 'master') {
                navigate('/dashboard');
            } else {
                navigate('/main');
            }
        }
    }, [isAuthenticated, userRole, navigate]);

  
   
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = findUsers(login, password);

        if (user) {
            if (user.role === 'master') {
                dispatch(loginAction(user.role, user.login));
                dispatch(setAuthenticated());
                navigate('/dashboard');
            } else if (user.role === 'client') {
                dispatch(loginAction(user.role, user.login));
                dispatch(setAuthenticated());
                navigate('/main');
            } else {
                setError('Вы не можете войти как клиент на страницу мастера или наоборот.');
            }
        } else {
            setError('Неправильно указан логин и пароль');
        }
    };

    const isValidation = () => {
        return login !== '' && password !== '';
    };

    return (
        <div className='wrapper-authorization fields'>
            <div className='wrapper-authorization_block'>
                <div className='authorization_block'>
                    <h1>{role === 'неизвестная роль' ? 'Вход' : `Вход для ${role}а`}</h1>
                    <p>
                        Нет Личного Профиля? <Link to="/register">Зарегистрироваться!</Link>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className='wrapper-form'>
                            <input
                                className='wrapper-form_input'
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                placeholder="Email или Номер телефона"
                                autoComplete="new-login"
                            />
                            <input
                                className='wrapper-form_input'
                                style={{ border: error ? '2px solid red' : '' }}
                                type="password"
                                value={password}
                                onChange={(e) => setPass(e.target.value)}
                                placeholder="Пароль"
                                autoComplete="new-password"
                            />
                            {error && <p className="error-message">{error}</p>}
                            <Link to='/'>Забыли пароль?</Link>
                            <button
                                className={isValidation() ? 'wrapper-form_button' : 'disabledButton'}
                                type="submit"
                                disabled={!isValidation()}
                            >
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPageUser;