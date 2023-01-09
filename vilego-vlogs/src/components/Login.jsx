import React from "react";

function Login() {
  return (
    <div className="main-login-page-container">
      <div className="signup-container">
        <form>
          <h3>Create Account</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="login-container">
        <form>
          <h3>Sign In</h3>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>Forgot your password?</p>
          <button>Login</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="left-overlay-panel">
          <h3>Welcome Back!</h3>
          <p>To keep connected with us please login with your personal info</p>
          <button>Login</button>
        </div>
        <div className="right-overlay-panel">
          <h3>Hello, Friend!</h3>
          <p>Enter your personal details and start your journey with us</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
