// import Hello from"./Components/Hello";
import React from "react";
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";
import Signup1 from "./Components/Signup1";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from "./Components/LoginPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignInSide/>}/>
        <Route path="/" element={<Landingpage/>}/>
      </Routes>
    </Router>
  )
}

export default App