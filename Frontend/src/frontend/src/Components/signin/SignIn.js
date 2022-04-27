import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./signIn.css"
import img from "./undraw_community_re_cyrm.svg"
import axios from 'axios'
function SignIn() {

  const[registerForm,setRegisterForm] = useState({
    username : '',
    first_name : "",
    last_name : "",
    email :"",
    password : "",
    confirmePassword : ""
  })

  function handleChange(e){
    const{name , value} = e.target
    setRegisterForm(prevValue=>{
        switch (name) {
          case "first_name":

              return{
                username : prevValue.username,
                first_name : value,
                last_name : prevValue.last_name,
                email : prevValue.email,
                password : prevValue.password,
                confirmePassword : prevValue.confirmePassword
              }

          case "last_name":
            return{
              username : prevValue.username,
              first_name : prevValue.first_name,
              last_name : value,
              email : prevValue.email,
              password : prevValue.password,
              confirmePassword : prevValue.confirmePassword
            }

          case "email":
            return{
              username : prevValue.username,
              first_name : prevValue.first_name,
              last_name : prevValue.last_name,
              email : value,
              password : prevValue.password,
              confirmePassword : prevValue.confirmePassword
            }

          case "password":
            return{
              username : prevValue.username,
              first_name : prevValue.first_name,
              last_name : prevValue.last_name,
              email : prevValue.email,
              password : value,
              confirmePassword : prevValue.confirmePassword
            } 
            
          case "confirmePassword":
            return{
              username : prevValue.username,
              first_name : prevValue.first_name,
              last_name : prevValue.last_name,
              email : prevValue.email,
              password : prevValue.password,
              confirmePassword : value
            }
            case "username":
              return{
                username : value,
                first_name : prevValue.first_name,
                last_name : prevValue.last_name,
                email : prevValue.email,
                password : prevValue.password,
                confirmePassword : value
              }  
            
        
          default:
            break;
        }
    })

  }

  function handleVerif(){
    if((registerForm.username.length===0)||(registerForm.first_name.length ===0)|| (registerForm.email.indexOf("@")===-1)||(registerForm.password.length<8)||(registerForm.confirmePassword.length<8)||(registerForm.password !== registerForm.confirmePassword)){
      return false
    }else{
      return true
    }

  }

  function handleSubmit(e){
    e.preventDefault()
    const verif = handleVerif()
   if(verif){
    axios.post(`http://localhost:8000/register/`,registerForm)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
   }else{
    const smalls = Array.from(document.querySelectorAll(".main .container_signin .right_div form small")) 
    smalls.forEach((s)=>{
      s.style.display = "block"
    })
   }
  }

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
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='username' onBlur={handleVerif} onChange={handleChange}/>
        <small>your username should be more than 0 characters</small>
          <input type="text" name="first_name" placeholder='first_name' onBlur={handleVerif} onChange={handleChange}/>
          <small>your name should be more than 0 characters</small>
          <input type="text" name="last_name" placeholder='last_name' onBlur={handleVerif} onChange={handleChange}/>
          <small>your name should be more than 0 characters</small>
          <input type="email" name="email" placeholder='Email' onBlur={handleVerif}  onChange={handleChange}/>
          <small>email should conatin "@" , "." !</small>
          <input type="password" name="password" placeholder='Password' onBlur={handleVerif}  onChange={handleChange}/>
          <small>password should be more than 8 characters</small>
          <input type="password" name="confirmePassword" placeholder='Confirme Password' onBlur={handleVerif}  onChange={handleChange}/>
          <small>confirme password should be identical</small>
          <input className='registerButton' type="submit" value="Register"/>
          <Link to='/login'>Have an account ? login</Link>
        </form>
      </div>
    </div>
    </div>

  )
}

export default SignIn