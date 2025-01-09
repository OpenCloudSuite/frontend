import React from 'react';
import './Login.css';

function Login() {
  return (
    <div class="login-container">
      <form class="login-form">
        <div class="logo">OpenCloudSuite</div>
        <h2>Login</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit" class="login-btn">Login</button>
        <a href="/register" class="register-link">Register instead?</a>
      </form>
    </div>
  );
}

export default Login;