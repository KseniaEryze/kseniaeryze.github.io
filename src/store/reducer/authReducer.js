import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOGIN } from '../action/userAction';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true,
            };
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false,
            };
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;