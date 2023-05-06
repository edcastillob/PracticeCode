import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ManScreen from '../pages/ManScreen';
import WomanScreen from '../pages/WomanScreen';
import SearchScreen from '../pages/SearchScreen';
import Navbar from '../components/Navbar'


const AppRouter = () => {
  return (
    <>
        <Navbar/>
      
        <Routes>
        <Route exact path="/mans" element={<ManScreen/>}></Route>   
        <Route exact path="/womans" element={<WomanScreen/>}></Route> 
        <Route exact path="/search" element={<SearchScreen/>}></Route> 
        </Routes>
            
   
    </>
  )
}

export default AppRouter;
