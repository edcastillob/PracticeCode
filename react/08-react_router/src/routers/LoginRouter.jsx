import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen';
import AppRouter from './AppRouter';

const LoginRouter = () => {
  return (
    <Router>
        <AppRouter/>       
        <Routes>
        <Route exact path="/login" element={<LoginScreen/>}></Route>       
        </Routes> 
    </Router>
  )
}

export default LoginRouter
