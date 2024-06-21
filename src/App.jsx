import React from 'react'
// import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './pages/login';
import { useState } from 'react';
import { Signup } from './pages/signup';
import {Otp} from './pages/otp';

function App() {

  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otpverification" element={<Otp />} />
    </Routes>
  </Router>
  </>
    
  )
}

export default App