
import React, { useState } from "react";
import "./App.css";

function App() {
  const [register, setRegister] = useState(false);

  return (
    <div className="page">
      <div className="card">

        <h1>{register ? "Create Account" : "Welcome Back!"}</h1>

        <p className="subtitle">
          {register
            ? "Join us and start your journey."
            : "Login to continue your journey."}
        </p>

        {register && (
          <input type="text" placeholder="Full Name" />
        )}

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        {!register && (
          <div className="forgot">Forgot Password?</div>
        )}

        <button onClick={() => alert("Success!")}>
          {register ? "Create Account →" : "Login →"}
        </button>

        <div className="switch">
          {register
            ? "Already have an account?"
            : "New here?"}

          <span onClick={() => setRegister(!register)}>
            {register ? " Login" : " Create Account"}
          </span>
        </div>

        <div className="footer">
          © 2026 YourWebsite. All rights reserved.
        </div>

      </div>
    </div>
  );
}

export default App;
