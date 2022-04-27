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
}

export default App;
