import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import useAuthStore from "./store/useAuthStore.js";
import Search from "./pages/Search.jsx";
import SearchHistory from "./pages/SearchHistory.jsx";
import Watch from "./pages/Watch.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={!user ? <Login /> : <Navigate to={'/'} />} />
        <Route path={'/signup'} element={!user ? <SignUp /> : <Navigate to={'/'} />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={'/search/history'} element={<SearchHistory />} />
        <Route path={'/watch/:id'} element={<Watch />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
