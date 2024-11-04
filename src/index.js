import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom'
import {store, persistor } from './store/configerStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyDj79gI-ZGNrQ9MBiyxevhaLBPdy_ma6YY",
  authDomain: "nail-dd1b8.firebaseapp.com",
  projectId: "nail-dd1b8",
  storageBucket: "nail-dd1b8.firebasestorage.app",
  messagingSenderId: "688337069046",
  appId: "1:688337069046:web:3e8b20e6e0da8020d69dd7",
  measurementId: "G-1CLYML22JP"
};



const app = initializeApp(firebaseConfig); // Инициализируйте приложение Firebase
const db = getDatabase(app);
console.log(app,db)
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Router>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
      </Provider>
    </Router>

   
);

