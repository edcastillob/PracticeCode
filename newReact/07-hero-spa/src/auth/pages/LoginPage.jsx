import { useNavigate } from "react-router-dom"



export const LoginPage = () => {

  const navigate = useNavigate();
  const onLogin= () => { 
    navigate('/', {
        replace: true
    });
}

  return (

    
    <>
    <h1>LoginPage</h1>
    <hr />

    <div className="rounded mx-auto d-block" style={{ width: "400px"}}><img src="../image/Marvel-Hero.gif" className="img-fluid" alt="Marvel-Hero"></img>
    
    </div>
    <button className="btn btn-danger rounded mx-auto d-block mt-4"   
    onClick={ onLogin } 
    >
      Login
    </button>
    
    </>
    
   
  )
}
