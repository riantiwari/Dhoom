import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Page Component
const Home = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Welcome to the UMD Dhoom Team</h1>
        <p>Maryland Dhoom is a South Asian fusion competing dance team. We include dance styles ranging from Bollywood, Bhangra, and Indian Classical to Hip Hop, Jazz, Modern, and much more. We strive to encompass various styles of cultural dances and spread awareness of South-Asian culture to our campus, community, and everywhere we go.</p>
        <a href="/contact" className="btn">Learn More!</a>
      </div>
    </div>
  );
};

// About Page Component
const MeetTheTeam = () => {
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
const History = () => {
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
const GetInvolved = () => {
  return (
    <div className="body-section">
      <div className="container">
      <h1>Get Involved</h1>
      <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
      </div>
    </div>
    
  );
};

// Join Us Page Component
const JoinUs = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>Join Us</h1>
      <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
      </div>
    </div>
    
  );
};

// Merch Page Component
const Merch = () => {
  return (
    <div class = "body-section">
      <div className="container">
      <h1>Merch</h1>
      <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
      </div>
    </div>
  );
};

// Contact Us Page Component
const ContactUs = () => {
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Maryland Dhoom</h1>
        <ul className="nav-links">
          <li class = "nav-text"><a href = "/" class = "link">Home</a></li>
          <li class = "nav-text"><a href = "/MeetTheTeam" class = "link">Meet The Team</a></li>
          <li class = "nav-text"><a href = "/History" class = "link">History</a></li>
          <li class = "nav-text"><a href = "/GetInvolved" class = "link">Get Involved</a></li>
          <li class = "nav-text"><a href = "/JoinUs" class = "link">Join Us</a></li>
          <li class = "nav-text"><a href = "/Merch" class = "link">Merch</a></li>
          <li class = "nav-text"><a href = "/ContactUs" class = "link">Contact Us</a></li>
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
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
          <Route path="/History" element={<History />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
          <Route path="/JoinUs" element={<JoinUs />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
