import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../action/userAction';

const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            };
        case SET_UNAUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export default authReducer;