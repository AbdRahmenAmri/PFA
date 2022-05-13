import React,{ useRef} from 'react'
import axios from "axios"

import './Login.css'
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true

function Login() {
    const navigate = useNavigate()
    const username = useRef();
    const password = useRef();

    const lusername = useRef();
    const lpassword = useRef();

    const rlogin = useRef();

    const login = () =>{
        axios(
            {url:'http://127.0.0.1:5000/fakelogin',
              method: 'POST',
              data: {  
                "username": username.current.value,
                "password": password.current.value}
            }
        ).then(res=>{
            if(res.status === 200) navigate('/messages')
        })


    }

    return (
        <div className='loginContainer'>
            <div className="loginBoxContainer">
                <div className="loginBox">
                    <form action="" className="loginForm">
                        <input type="text" name="username" id="loginUsername" className='lform' ref={username}/>
                        <label htmlFor="username" id='lusername' ref={lusername}>Username or E-mail</label>
                        <input type="password" name="password" id="loginPassword" className='lform' ref={password}/>
                        <label htmlFor="password" id="lpassword" ref={lpassword}>Password</label>
                        <input type="button" value="login" ref={rlogin} onClick={login}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
