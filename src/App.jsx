import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './page/Main';
import React from 'react';
import LoginPageUser from './components/Registracion/User/LoginPageUser';
import RegisterPage from './components/Registracion/User/RegisterPageUser';
import LoginPageMaster from './components/Registracion/MasterNails/LoginPageMaster';
import RegisterPageMaster from './components/Registracion/MasterNails/RegisterPageMaster';
import MasterMain from './page/MasterPage/MasterMain';

function App() {
  
  return (
  
      <>
        <Header></Header>
        <Routes>
              <Route path='/main' element={<MasterMain></MasterMain>}/>
              <Route path='/loginUser' element={<LoginPageUser/>}/>
              <Route path='/registerUser' element={<RegisterPage/>}/>
              <Route path='/loginMaster' element={<LoginPageMaster/>}/>
              <Route path='/registerMaster' element={<RegisterPageMaster/>}/>
              
        </Routes>
      </>
    );
  }

export default App
