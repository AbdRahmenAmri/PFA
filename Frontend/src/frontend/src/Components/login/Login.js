import axios from 'axios'
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import img from "./undraw_community_re_cyrm.svg"
function Login() {

  const[loginForm,setLoginForm] = useState({
    username : "",
    password : ""
  })

  function handleChange(e){
    const {value , name} = e.target

    setLoginForm(prevValue =>{
      if(name==="username"){
        return{
          username : value,
          password : prevValue.password
        }
      }
      if(name==="password"){
        return{
          username : prevValue.username,
          password : value
        }
      }
    })

    }

    function handleVerif(){
      if(loginForm.username.length===0 || loginForm.password.length===0){
        return false
      }else{
        return true
      }
    }

    function handleSubmit(e){
        e.preventDefault()
        const verif = handleVerif()
        if(verif){
          axios.post(`https://jsonplaceholder.typicode.com/users`,loginForm)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        }else{
          const p = document.querySelector(".main .container_login .right_div form p")
            p.style.display = "block"
        }

    }



  return (
    <div className='main'>
            <div className='container_login'>
      <div className='left_div'>
        <h1>logo</h1>
        <h4>Welcome to our community</h4>
        <img src={img} alt="community"/>

      </div>
      <div className='right_div'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder='username' value={loginForm.username} onBlur={handleVerif} onChange={handleChange} />
          <input type="password" name="password" placeholder='password' value={loginForm.password} onBlur={handleVerif}  onChange={handleChange}/>
          <Link to='/forgetPassword'>Forget password ?</Link>
          <input type="submit" value="LOGIN" />

          <p className='warn'>Username or password is incorrect try agin !</p>
        </form>
        <small>Don't have an account ? <Link to='/signin'>Register Now</Link></small>
      </div>
    </div>
    </div>

  )
}

export default Login