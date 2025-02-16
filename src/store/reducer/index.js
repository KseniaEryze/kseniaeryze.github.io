import { combineReducers } from 'redux';
import authReducer from './authReducer'
import clientReducer from './clientReducer';
import documentReducer from './documentReducer';
import portfolioReducer from './portfolioReducer';

   const rootReducer = combineReducers({
        portfolio: portfolioReducer,
        documents: documentReducer,
        clients: clientReducer,
        auth: authReducer,
      
       
   });

export default rootReducer;

