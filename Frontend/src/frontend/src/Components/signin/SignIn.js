import React from 'react'
import { Link } from 'react-router-dom'
import "./signIn.css"
import img from "./undraw_community_re_cyrm.svg"
function SignIn() {
  return (
    <div className='main'>
            <div className='container_signin'>
      <div className='left_div'>
        <h1>logo</h1>
        <h4>Welcome to our community</h4>
        <img src={img} alt="community"/>

      </div>
      <div className='right_div'>
        <h2>Register</h2>
        <form>
          <input type="text" name="fullname" placeholder='FullName'/>
          <input type="email" name="email" placeholder='Email'/>
          <small>Invalid email @ !</small>
          <input type="text" name="password" placeholder='Password'/>
          <small>password should be more than 8 characters</small>
          <input type="password" name="confirmePassword" placeholder='Confirme Password'/>
          <small>confirme password should be identical</small>
          <input className='registerButton' type="submit" value="Register" />
          <Link to='/Login'>Have an account ? login</Link>
        </form>
      </div>
    </div>
    </div>

  )
}

export default SignIn