import React from 'react'
import "./forgetPassword.css"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
function ForgetPassword() {
  return (
    <div className='container'>
        <form>
        <Link to="/Login"><FontAwesomeIcon icon={faArrowLeft} /> </Link>
            <input type="email" name="email" placeholder='Enter your email'/>
            <input type="submit" value="Send" />
            <small>You will receive a mail to reset your password</small>
        </form>
    </div>
  )
}

export default ForgetPassword