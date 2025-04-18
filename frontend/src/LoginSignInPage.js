import React, { useState } from 'react';
import './LoginSignInPage.css'; // optional: for styling

const LoginSignInPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', // Only for signup
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ email: '', password: '', confirmPassword: '' }); // reset
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (activeTab === 'signup' && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Open dashboard in new tab
    window.open('/dashboard', '_blank');
  };

  return (
    <div className="login-signin-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => handleTabChange('signup')}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        {activeTab === 'signup' && (
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
        )}

        <button type="submit">
          {activeTab === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default LoginSignInPage;
