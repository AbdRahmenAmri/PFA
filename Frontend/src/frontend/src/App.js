import React from 'react';

import './App.css';

import Login from './Components/login/Login'
import Notfound from './Components/pages/Notfound'
import Policy from './Components/pages/Policy'
import Terms from './Components/pages/Terms'
import HomePage from "./Components/homePage/HomePage"
import {Routes , Route , BrowserRouter} from "react-router-dom"
import ForgetPassword from "./Components/forgetPassword/ForgetPassword";
import SignIn from "./Components/signin/SignIn";
import LandingPage from "./Components/landingPage/LandingPage"


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
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
