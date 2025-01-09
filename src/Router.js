import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Drive from './pages/Drive/Drive';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drive" element={<Drive />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;