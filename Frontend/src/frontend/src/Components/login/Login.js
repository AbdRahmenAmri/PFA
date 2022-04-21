import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import img from "./undraw_community_re_cyrm.svg"
function Login() {
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
        <form>
          <input type="text" name="username" placeholder='username'/>
          <input type="password" name="password" placeholder='password'/>
          <Link to='/ForgetPassword'>Forget password ?</Link>
          <input type="submit" value="LOGIN" />

          <p className='warn'>Username or password is incorrect try agin !</p>
        </form>
        <small>Don't have an account ? <Link to='/Signin'>Register Now</Link></small>
      </div>
    </div>
    </div>

  )
}

export default Login