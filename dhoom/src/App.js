import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import insta_logo from './Assets/insta_logo.png'
import gmail_logo from './Assets/Gmail_icon_(2020).svg.webp'
import tiktok_logo from './Assets/tiktok-logo.jpg'
import dhoom_logo from "./Assets/dhoom_logo.png"; 
import userPlaceHolder from './Assets/userPlaceHolder.png';


// Home Page Component
const Home = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Welcome to the UMD Dhoom Team</h1>
        <p>Maryland Dhoom is a South Asian fusion competing dance team. We include dance styles ranging from Bollywood, Bhangra, and Indian Classical to Hip Hop, Jazz, Modern, and much more. We strive to encompass various styles of cultural dances and spread awareness of South-Asian culture to our campus, community, and everywhere we go.</p>
        <a href="/JoinUs" className="btn">Learn More!</a>
      </div>
    </div>
  );
};

// About Page Component
const MeetTheTeam = () => {
  return (
    <div className="body-section">
      <div className="container">
        <h1>Meet The Team</h1>
        <p>Learn more about the UMD Dhoom Team and our mission.</p>
      </div>
      <div className='meetTeamMain'>
        <div className='memberSection'>
          <img src={userPlaceHolder}></img>
          <div className='personInfo'>
            <div className='personName'>Rian Tiwari</div>
            <div className='personBlurb'>Hello, my name is Rian Tiwari and this is a bit about me.</div>
          </div>
        </div>
        <div className='memberSection'>
          <img src={userPlaceHolder}></img>
          <div className='personInfo'>
            <div className='personName'>Rohith Koneru</div>
            <div className='personBlurb'>Hello, my name is Rohith Koneru and this is a bit about me.</div>
          </div>
        </div>
        <div className='memberSection'>
          <img src={userPlaceHolder}></img>
          <div className='personInfo'>
            <div className='personName'>Aakash Kalmady</div>
            <div className='personBlurb'>Hello, my name is Aakash Kalmady and this is a bit about me.</div>
          </div>
        </div>
      </div>

      <div className='meetTeamSide'>
        <div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
          Block 1
          </div>
        </div>
        <div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
            Block 2
          </div>
        </div><div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
            Block 3
          </div>
        </div><div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
            Block 4
          </div>
        </div><div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
            Block 5
          </div>
        </div><div className="grid-item">
          <img src={userPlaceHolder}></img>
          <div className='sideTeamNames'>
            Block 6
          </div>
        </div>
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

      <div className='container'>
        We hold auditions for the team in the fall where we teach a short 30 second routine and then people interested in trying out do so by demonstrating that piece in front of the captains. We also offer a optional piece to complement your audition in order to showcase certain strengths you may have as a dancer. No dance experience is necessary to tryout. Fall 2022: Information about our Learning Day Fall 2022 will be released soon! Keep up with our Instagram (@marylandhoom) for the latest updates!
      </div>
      <div className="body-section">
        <div className="container">
          <p>Get in touch with the UMD Dhoom Team for inquiries and collaborations.</p>
          <ContactForm />
          <div className="social-links">
            <h2>Follow us on social media:</h2>
              <div class = "icon_container">
                <img class = "instaicon" src= {insta_logo} href="https://www.instagram.com/marylandhoom" />
                <a href="mailto:marylandhoom@gmail.com"><img class = "mailicon" src= {gmail_logo} /></a>
                <a href="https://www.tiktok.com/@marylandhoom"><img class = "tiktokicon" src= {tiktok_logo} /></a>
              </div>
          </div>
        </div>
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


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className='nav-container'>
        <div className="logo-container">
        <img src={dhoom_logo} alt="dhoom" className="dhoom-logo"/>
          </div>
        <div className="heading-container">
          <h1 className="logo">Maryland Dhoom</h1>
          <ul className="nav-links">
            <li class="nav-text"><a href="/" class="link">Home</a></li>
            <li class="nav-text"><a href="/MeetTheTeam" class="link">Meet The Team</a></li>
            <li class="nav-text"><a href="/History" class="link">History</a></li>
            <li class="nav-text"><a href="/GetInvolved" class="link">Get Involved</a></li>
            <li class="nav-text"><a href="/JoinUs" class="link">Join Us</a></li>
            <li class="nav-text"><a href="/Merch" class="link">Merch</a></li>
          </ul>
        </div>
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
          {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
