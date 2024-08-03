import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
