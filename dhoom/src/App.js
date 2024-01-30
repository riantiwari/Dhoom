import React from 'react';
import './App.css';

// Navbar Component
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// Body Section Component
const BodySection = () => {
  return (
    <div>
      <h1>Welcome to Simple React Framework</h1>
      <p>This is the body section of your application.</p>
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