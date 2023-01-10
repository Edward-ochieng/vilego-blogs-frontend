import React, { useState } from "react";
import "./App.css";

function App() {
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
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
            <p>
              To keep connected with us please login with your personal info
            </p>
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
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start your journey with us</p>
            <button className="overlay-button" onClick={() => setSignin(false)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
