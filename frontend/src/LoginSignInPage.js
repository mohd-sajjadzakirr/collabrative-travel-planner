import React from 'react';
import './LoginSignInPage.css'; // Ensure to import your CSS file

const LoginSignInPage = () => {
  const handleLogin = () => {
    // Logic for handling login goes here
    // After successful login, close the window
    window.close();
  };

  const handleSignUp = () => {
    // Logic for handling sign-up goes here
    // After successful sign-up, close the window
    window.close();
  };

  return (
    <div className="login-signin-container">
      <div className="get-started">
        <h1>Get Started</h1>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        {/* Form fields for email and password */}
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Sign In</button>
        
        <h2>Sign Up</h2>
        {/* Sign up fields */}
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginSignInPage;
