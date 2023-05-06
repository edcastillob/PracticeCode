import React, { useState } from 'react'
//import Header from './components/Header'
import AppRouter from './routes/AppRouter'
import { userContext } from './contexts/userContext'


const App = () => {

  const [user, setUser] = useState(null);

  return (
      
    <userContext.Provider value={{user, setUser}}>
    <AppRouter/>    
    </userContext.Provider>   
     

   
    
  )
}

export default App
