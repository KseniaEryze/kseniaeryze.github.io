export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';

// Создаем функции для отправки действий
export const login = (role, login) => ({
    type: LOGIN,
    payload: { role, login },
});

export const logout = () => ({
    type: LOGOUT,
});

export const setAuthenticated = () => ({
    type: SET_AUTHENTICATED,
});

export const setUnauthenticated = () => ({
    type: SET_UNAUTHENTICATED,
});