import React from 'react';

import './App.css';

import Login from './Components/login/Login'
import Notfound from './Components/pages/Notfound'

import {Routes , Route , BrowserRouter} from "react-router-dom"
import Messages from './Components/messages/Messages';
import ToMessages from './Components/tomessages/ToMessages';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToMessages/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/messages/t/:idConv" element={<Messages/>} />
        <Route  path='/*' element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
