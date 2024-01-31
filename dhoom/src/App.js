import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Page Component
const Home = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>Welcome to the UMD Dhoom Team</h1>
      <p>We are a passionate dance team dedicated to spreading joy and creativity through dance.</p>
      <Link to="/join" className="btn">Join Us</Link>
      </div>
    </div>
    
  );
};

// About Page Component
const About = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>About Us</h1>
      <p>Learn more about the UMD Dhoom Team and our mission.</p>
      </div>
    </div>
    
  );
};

// Events Page Component
const Events = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>Events</h1>
      <p>Check out our upcoming events and performances.</p>
      </div>
    </div>
    
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>Contact Us</h1>
      <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
      </div>
    </div>
    
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Maryland Dhoom</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;

