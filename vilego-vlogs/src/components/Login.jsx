import React from 'react'

function Login() {
  return (
    <div className="main-login-page-container">
      <div className="signup-container">
        <form>
          <h3>Create Account</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="First Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
        </form>
      </div>
      <div className="login-container"></div>
      <div className="overlay-container">
        <div className="left-overlay-panel"></div>
        <div className="right-overlay-panel"></div>
      </div>
    </div>
  );
}

export default Login