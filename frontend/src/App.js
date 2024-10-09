import React from 'react';
import './App.css';

function App() {
  const handleClick = (buttonName) => {
    alert(`${buttonName} button clicked!`);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#login">Login / Sign Up</a>
        </div>
      </nav>

      {/* First Section - Landing Page */}
      <section id="home" className="landing-page">
        <div className="content">
          <h1>Collaborate with friends and family to create unforgettable travel experiences</h1>
          <div className="image-placeholder"/>
          
          <button className="create-trip-button" onClick={() => handleClick("Create Trip")}>
            Create Trip
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section id="features" className="second-section">
        <div className="feature-grid">
          <div className="feature-box" onClick={() => handleClick("Real-Time Collaboration")}>
            <h2>Real-Time Collaboration</h2>
          </div>
          <div className="feature-box" onClick={() => handleClick("Itinerary Planning Made Easy")}>
            <h2>Itinerary Planning Made Easy</h2>
          </div>
          <div className="feature-box" onClick={() => handleClick("Budget Tracking & Expense Sharing")}>
            <h2>Budget Tracking & Expense Sharing</h2>
          </div>
          <div className="feature-box" onClick={() => handleClick("Smart Travel Suggestions")}>
            <h2>Smart Travel Suggestions</h2>
          </div>
        </div>
        <button className="learn-more-button" onClick={() => handleClick("Learn More")}>
          Learn More
        </button>
      </section>

      {/* Footer Section */}
      <footer id="about" className="footer-section">
        <div className="footer-content">
          <h2>About Us</h2>
          <p>All the necessary details about the website.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
