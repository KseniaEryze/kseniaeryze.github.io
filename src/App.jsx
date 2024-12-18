import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './page/Main';
import React from 'react';
import LoginPageUser from './components/Registracion/User/LoginPageUser';
import RegisterPage from './components/Registracion/User/RegisterPageUser';
import { useDispatch } from 'react-redux';
import { setUnauthenticated } from './store/action/userAction';
import MasterMain from './page/MasterPage/MasterMain';

function App() {
const dispatch = useDispatch();
const handleLogout = () => {
    dispatch(setUnauthenticated());
};
 
  window.addEventListener('beforeunload', function() {
    handleLogout()
}); 
  return (
  
      <>
        <Header></Header>
        <Routes>
              <Route path='/main' element={<Main></Main>}/>
              <Route path='/loginUser' element={<LoginPageUser/>}/>
              <Route path="/registerUser" element={<RegisterPage />} />
              <Route path="/masterDashboardLink" element={<MasterMain />} />
            
        </Routes>
      </>
    );
  }

export default App
