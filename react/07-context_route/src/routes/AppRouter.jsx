import React from 'react'
import {BrowserRouter as Router,  Route, Routes, Navigate} from 'react-router-dom'
import Header from '../components/Header'
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from '../pages/NotFound'; 
 


const AppRouter = () => {
  return (
    <Router>
        <Header/>    
    <Routes>
        <Route exact path="/"  element={<Home/>}></Route>  
        <Route exact path="/About"  element={<About/>}></Route>  
        <Route  path='not_found'  element={<NotFound/>}></Route> 
        <Route  path='*'  element={<Navigate to='/not_found'/>}/>  

       
         

        
    </Routes>
    </Router>
  )
}

export default AppRouter
