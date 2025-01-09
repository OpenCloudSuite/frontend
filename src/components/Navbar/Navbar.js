import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloud, faFileAlt, faFileExcel, faFilePowerpoint, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="navbar">
      <div className="logo">OpenCloudSuite</div>
      <ul className="nav-links">
        {isLoggedIn && (
          <>
            <li><a href="/" className="nav-link"><FontAwesomeIcon icon={faHome} className="icon" /> Home</a></li>
            <li><a href="/drive" className="nav-link"><FontAwesomeIcon icon={faCloud} className="icon" /> Drive</a></li>
            <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFileAlt} className="icon" /> Documents</a></li>
            <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFileExcel} className="icon" /> Spreadsheets</a></li>
            <li className="disabled"><a href="#" className="nav-link"><FontAwesomeIcon icon={faFilePowerpoint} className="icon" /> PowerPoints</a></li>
          </>
        )}
      </ul>
      <div className="nav-actions">
        <div className="account-dropdown">
          <button className="account-btn">
            <FontAwesomeIcon icon={faUser} className="icon" /> Account
          </button>
          <div className="dropdown-content">
            {!isLoggedIn ? (
              <>
                <a href="/login">Sign In</a>
                <a href="/register">Sign Up</a>
              </>
            ) : (
              <>
                <a href="/account">Account Management</a>
                <a href="#" onClick={() => setIsLoggedIn(false)}>Logout</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;