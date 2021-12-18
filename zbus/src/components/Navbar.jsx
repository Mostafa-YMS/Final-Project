import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


export const Navbar = () => {
  let {user,logOut} = useContext(AuthContext)
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='nav'>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          UBus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="lines">
                Lines & Stops
              </a>
            </li>
          </ul>
    
          <ul className="my-2 my-lg-0 navbar-nav ml-auto">
            <li className="nav-item {% block profile %} {% endblock %}">
              <a className="nav-link" href="/Profile">
                Profile
              </a>
            </li>
            {user?
            <li className="nav-item">
              <a className="nav-link" href="/login" onClick={logOut}>
                 logout
              </a>
            </li> :<li className="nav-item">
              <a className="nav-link" href="/login" onClick={logOut}>
                 login
              </a>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};