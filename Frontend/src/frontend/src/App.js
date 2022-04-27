import React from 'react';

import './App.css';

import Login from './Components/login/Login'
import {Notfound,Terms,Policy} from './Components/pages/*'

import {Routes , Route , BrowserRouter} from "react-router-dom"
import ForgetPassword from "./Components/forgetPassword/ForgetPassword";
import LandingPage from "./Components/landingPage/LandingPage"
import Login from "./Components/login/Login";
import SignIn from "./Components/signin/SignIn";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signin" element={<SignIn/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route  path='/terms' element={<Terms/>}></Route>
        <Route  path='/policy' element={<Policy/>}></Route>
        <Route  path='/*' element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
