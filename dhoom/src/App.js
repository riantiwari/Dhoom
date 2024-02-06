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
      <a href = "/contact" class = "btn">Join Us</a>
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

// ContactForm component
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, such as sending the data to a server
    // Example: console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
        <ContactForm />
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
          <li class = "nav-text"><a href = "/" class = "link">Home</a></li>
          <li class = "nav-text"><a href = "/about" class = "link">About</a></li>
          <li class = "nav-text"><a href = "/events" class = "link">Events</a></li>
          <li class = "nav-text"><a href = "/contact" class = "link">Contact Us</a></li>
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

