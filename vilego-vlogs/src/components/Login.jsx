import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [signIn, setSignin] = useState(true);

  const [login, setLogin] = useState({ username: "", password: "" });
  const [signup, setSignup] = useState({
    firstName: "",
    secondName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const apiURL = "http://127.0.0.1:3000";
  const active = !signIn && "active";

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch(`${apiURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: signup.firstName,
        secondname: signup.secondName,
        username: signup.username,
        email_address: signup.email,
        password: signup.password,
        password_confirmation: signup.passwordConfirmation,
      }),
    });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login.username,
        password: login.password,
      }),
    });
  }

  return (
    <div className="main-login-page-container">
      <div className={`signup-container ${active}`}>
        <form onSubmit={handleSignupSubmit}>
          <h2>Create Account</h2>
          <input
            onChange={(e) =>
              setSignup({ ...signup, firstName: e.target.value })
            }
            value={signup.firstName}
            required
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) =>
              setSignup({ ...signup, secondName: e.target.value })
            }
            value={signup.secondName}
            required
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={(e) => setSignup({ ...signup, username: e.target.value })}
            value={signup.username}
            required
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setSignup({ ...signup, email: e.target.value })}
            value={signup.email}
            required
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            value={signup.password}
            required
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(e) =>
              setSignup({ ...signup, passwordConfirmation: e.target.value })
            }
            value={signup.passwordConfirmation}
            required
            type="password"
            placeholder="Password Confirmation"
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`login-container ${active}`}>
        <form onSubmit={handleLoginSubmit}>
          <h2>Sign In</h2>
          <input
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            value={login.username}
            required
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            value={login.password}
            required
            type="password"
            placeholder="Password"
          />
          <a href="#">Forgot password?</a>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className={`overlay-container ${active}`}>
        <div className={`overlay ${active}`}>
          <div className={`overlay-panel left-overlay-panel ${active}`}>
            <h2>Welcome Back!</h2>
            <p>Log in to continue where you left off.</p>
            <button className="overlay-button" onClick={() => setSignin(true)}>
              Login
            </button>
          </div>
          <div className={`overlay-panel right-overlay-panel ${active}`}>
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
