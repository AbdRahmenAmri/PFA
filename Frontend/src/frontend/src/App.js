<<<<<<< HEAD
import React from 'react';

import './App.css';
import LandingPage from './Components/landingPage/LandingPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Login from './Components/login/Login'
import {Notfound,Terms,Policy} from './Components/pages/*'



function App() {
    return (
      <>
      <Router>
      <Routes>
        <Route  path='/' element={<LandingPage/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/register' element={<Login/>}></Route>
        <Route  path='/terms' element={<Terms/>}></Route>
        <Route  path='/policy' element={<Policy/>}></Route>
        <Route  path='/*' element={<Notfound/>}></Route>
      </Routes>
      </Router>
      </>
    );
=======
import {Routes , Route , BrowserRouter} from "react-router-dom"
import './App.css';
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
      </Routes>
    </BrowserRouter>

    </div>
  );
>>>>>>> 4e0af05b970e65ee6f9c1958799e1716712a408c
}

export default App;
