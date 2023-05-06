import React, { useContext } from 'react'
import { userContext } from '../contexts/userContext';


const About = () => {
  const {user} = useContext(userContext)
  return (
    <div className='container text-center mt-3'>
      <h1>About- Screen</h1>
      {!user ? <h2 className='text-danfer'>Ir al Login</h2> : (
      <div>
        <h3>Usuario: {user.data.first_name} {user.data.last_name}</h3>
        <h3>Email: {user.data.first_email}</h3>
        <img src={user.data.avatar} alt={user.data.id} width='150px' height='150px'/>

   

      </div>
      )
    }
    </div>
  )
}

export default About;
