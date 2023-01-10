import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [signIn, setSignin] = useState(true);

  return (
    <div className="main-login-page-container">
      <div
        className="signup-container"
        style={{
          transform: !signIn ? "translateX(100%)" : "",
          opacity: !signIn ? 1 : 0,
          zIndex: !signIn ? 5 : 1,
        }}
      >
        <form>
          <h2>Create Account</h2>
          <input required type="text" placeholder="First Name" />
          <input required type="text" placeholder="Last Name" />
          <input required type="text" placeholder="Username" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required type="password" placeholder="Password Confirmation" />
          <button>Sign Up</button>
        </form>
      </div>
      <div
        className="login-container"
        style={{
          transform: !signIn ? "translateX(100%)" : "",
        }}
      >
        <form>
          <h2>Sign In</h2>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <a href="#">Forgot password?</a>
          <button>Login</button>
        </form>
      </div>
      <div
        className="overlay-container"
        style={{
          transform: !signIn ? "translateX(-100%)" : "",
        }}
      >
        <div
          className="overlay"
          style={{
            transform: !signIn ? "translateX(50%)" : "",
          }}
        >
          <div
            className="overlay-panel left-overlay-panel"
            style={{
              transform: !signIn ? "translateX(0)" : "",
            }}
          >
            <h2>Welcome Back!</h2>
            <p>Log in to continue where you left off.</p>
            <button className="overlay-button" onClick={() => setSignin(true)}>
              Login
            </button>
          </div>
          <div
            className="overlay-panel right-overlay-panel"
            style={{
              transform: !signIn ? "translateX(20%)" : "",
            }}
          >
            <h2>Welcome Aboard!</h2>
            <p>
              By signing up, you'll gain access to all of the features and
              benefits our website has to offer. Let's get started!
            </p>
            <button className="overlay-button" onClick={() => setSignin(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
