import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginSignInPage from './LoginSignInPage'; // Import the login/sign-in page component

function App() {
  const handleClick = (buttonName) => {
    alert(`${buttonName} button clicked!`);
  };

  const openLoginPage = () => {
    window.open('/login', '_blank'); // Open the login page in a new tab
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">Logo</div>
          <div className="nav-links">
            <Link to="#home">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#features">Features</Link>
            <button onClick={openLoginPage}>Login / Sign Up</button> {/* Use button to open login in new tab */}
          </div>
        </nav>

        {/* Define routes for the landing page and login page */}
        <Routes>
          <Route path="/" element={  // Default landing page route
            <section id="home" className="landing-page">
              <div className="content">
                <h1>Collaborate with friends and family to create unforgettable travel experiences</h1>
                <div className="image-placeholder"></div>
                <button className="create-trip-button" onClick={() => handleClick("Create Trip")}>
                  Create Trip
                </button>
              </div>
            </section>
          } />
          <Route path="/login" element={<LoginSignInPage />} />
        </Routes>

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
    </Router>
  );
}

export default App;
