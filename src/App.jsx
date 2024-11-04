import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Registracion/LoginPage';
import Logout from './components/Registracion/RegisterPage';
import Main from './page/Main';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React from 'react';
import { Component } from 'react';

function App() {
  return (
  
      <>
        <Header></Header>
        <Routes>
              <Route path='/main' element={<Main/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Logout/>}/>
              
        </Routes>
      </>
    );
  }

export default App
