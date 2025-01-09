import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Drive from './pages/Drive/Drive';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />


        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;