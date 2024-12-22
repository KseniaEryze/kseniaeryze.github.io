import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { login as loginAction, setAuthenticated } from '../../../store/action/userAction';
import '../authUser.css';
import { findUsers } from '../fakeData';

function LoginPageUser() {
    const [searchParams] = useSearchParams();
    const role = searchParams.get('role') || 'неизвестная роль';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.user?.role);

    const [login, setLogin] = useState('');
    const [password, setPass] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            if (userRole === 'admin') {
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
            dispatch(loginAction(user.role, user.login));
            dispatch(setAuthenticated());
        } else {
            setError('Неправильно указан логин и пароль');
            console.log(error);
        }
    };

    const isValidation = () => {
        return login !== '' && password !== '';
    };

    return (
        <div className='wrapper-authorization'>
            <div className='wrapper-authorization_block'>
                <h1>Вход для {role}а</h1>
                <p>
                    Нет Личного Профиля? <Link to="/registerUser"> Зарегистрироваться!</Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className='wrapper-form'>
                        <input
                            className='wrapper-form_input'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            placeholder="Email или Номер телефона"
                        />
                        <input
                            className='wrapper-form_input'
                            style={{ border: error ? '2px solid red' : '#F04438' }}
                            type="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="Пароль"
                        />
                        {error && <p className="error">{error}</p>}
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
    );
}

export default LoginPageUser;