import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () =>{
        navigate("/login")
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-ligth bg-info">
  <div className="container-fluid">
    <h2 className="navbar-brand">DBallz App</h2>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/mans">
                 Mans
                </NavLink>
        </li>
        <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/womans">
                 Womans
                </NavLink>
        </li>
        <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/search">
                 Search
                </NavLink>
        </li>        
      </ul>
                <div className='d-flex'>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
    </div>
  </div>

</nav>
  )
}

export default Navbar

