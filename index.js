import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Ensure this file exists, or remove this line
import { FaChevronRight, FaChevronDown, FaBook, FaGithub, FaSearch, FaSun, FaMoon, FaThumbsUp, FaThumbsDown, FaMeh } from 'react-icons/fa';
import { BsTerminal } from 'react-icons/bs';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="header-left">
          <img src="https://docs.readyplayer.me/img/rpm-logo.png" alt="Ready Player Me Logo" className="logo" />
        </div>
        <div className="header-right">
          <a href="#" className="nav-link">Website</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Forums</a>
          <div className="dropdown">
            <button className="dropdown-btn">Sign up <FaChevronDown size={12} /></button>
          </div>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Ask or search..." className="search-input" />
            <span className="shortcut">Ctrl + K</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <h1>Welcome to My React App</h1>
        <p>If you're seeing this, React is working!</p>
      </main>
      <div className="theme-switcher">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="layout-btn">
          <BsTerminal />
        </button>
      </div>
    </div>
  );
}

// Ensure React mounts on <div id="root">
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Could not find <div id='root'> in index.html");
}
