import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import useAuthStore from "./store/useAuthStore.js";

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={!user ? <Login /> : <Navigate to={'/'} />} />
        <Route path={'/signup'} element={!user ? <SignUp /> : <Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
