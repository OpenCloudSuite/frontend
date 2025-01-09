import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Base.css';

function Base({ children }) {
  return (
    <div className="base">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Base;