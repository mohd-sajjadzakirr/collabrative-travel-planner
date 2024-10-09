import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">logo</div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/login">Login / Sign Up</a>
        </nav>
      </header>

      <div className="content">
        <h1>Collaborate with friends and family to create unforgettable travel experiences</h1>
        <div className="image-placeholder">
          <p>image of some place</p>
        </div>
        <button className="create-trip-btn">Create Trip</button>
      </div>
    </div>
  );
}

export default App;
