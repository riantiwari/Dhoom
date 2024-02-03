import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Page Component
const Home = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Welcome to the UMD Dhoom Team</h1>
        <p>Maryland Dhoom is a South Asian fusion competing dance team. We include dance styles ranging from Bollywood, Bhangra, and Indian Classical to Hip Hop, Jazz, Modern, and much more. We strive to encompass various styles of cultural dances and spread awareness of south-Asian culture to our campus, community, and everywhere we go.</p>
        <a href="/contact" className="btn">Learn More!</a>
      </div>
    </div>
  );
};

// About Page Component
const About = () => {
  return (
    <div className="body-section">
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
    <div className="body-section">
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Maryland Dhoom</h1>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
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
