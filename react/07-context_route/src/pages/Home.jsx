import React, { useContext } from 'react'
import { userContext } from '../contexts/userContext';
import { userData } from '../helpers/userData';


const Home = () => {

  const {user, setUser} = useContext(userContext);

  const handleLogin = () => {
    setUser(userData)
  }

  const handleLogout = () =>{
    setUser(null)

  }

  return (
    <div className='container text-center mt-3'>
      <h2>Probando y aprendiendo</h2>
    
    {/* {user && <h2>{user.data.first_name} </h2>} */}
    {!user ? 
            <button className='btn btn-primary' onClick={handleLogin}>Login</button>
          : <div>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>   
        
       
        </div>    
    }
      
    </div>
  )
}

export default Home;
