import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <form className="register-form">
        <div className="logo">OpenCloudSuite</div>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="register-btn">Register</button>
        <a href="/login" className="login-link">Login instead?</a>
      </form>
    </div>
  );
}

export default Register;