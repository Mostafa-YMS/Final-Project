import jwt_decode from "jwt-decode"
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
        
        // let user=null
        let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
        let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
        const navigate = useNavigate()
        // const history = useHistory()
        let loginUser = async (e )=> {

            e.preventDefault()
            let response = await fetch('http://127.0.0.1:8000/user/login', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})// form is the target
            }) 
            
            let data = await response.json()

        if(response.status === 200){
            // setAuthTokens(data)
            // user=jwt_decode(data.jwt)
            console.log("auth",data.jwt);
            setUser(jwt_decode(data.jwt))
            console.log("user",user);
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/')
            // console.log("user",user)
            // // console.log("username",user.username)
            // console.log("data",data)
        }else{
            alert('Something went wrong!')
        }
    }
    let logOut = async (e )=> {

        // e.preventDefault()
        localStorage.clear()
        user=null
        navigate('/')
        // window.location.reload();
    }
    let contextData = {
        user:user,
        logOut:logOut,
        loginUser:loginUser,

    }
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}