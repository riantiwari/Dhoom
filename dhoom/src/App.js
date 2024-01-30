import React from 'react';
import './App.css';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Dance Team</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

// Body Section Component
const BodySection = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Welcome to the UMD Dhoom Team</h1>
        <p>We are a passionate dance team dedicated to spreading joy and creativity through dance.</p>
        <button className="btn">Join Us</button>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BodySection />
    </div>
  );
};

export default App;
