import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud, faFileAlt, faFileExcel, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">OpenCloudSuite</div>
      <ul className="nav-links">
        <li><a href="/" className="nav-link"><FontAwesomeIcon icon={faHome} className="icon" /> Home</a></li>
        <li><a href="/drive" className="nav-link"><FontAwesomeIcon icon={faCloud} className="icon" /> Drive</a></li>
        <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFileAlt} className="icon" /> Documents</a></li>
        <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFileExcel} className="icon" /> Spreadsheets</a></li>
        <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFilePowerpoint} className="icon" /> PowerPoints</a></li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;