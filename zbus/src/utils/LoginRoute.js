import { Route } from 'react-router-dom'

import { Navigate,  Outlet } from 'react-router-dom';
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginRoute = (props) => {
    let {user} = useContext(AuthContext)
    return !user ? props.child : <Navigate to={"/"}/>  ;
    // const authenticated = false
    // return authenticated ? props.child : <Navigate to="/"  />;
    
}

export default LoginRoute
