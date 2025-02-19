import React, { useState } from 'react';
import './App.css';
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

      <div className="content-wrapper">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div className="sidebar-section">
              <a href="#" className="sidebar-link">Welcome</a>
              <a href="#" className="sidebar-link">How Ready Player Me works</a>
              <a href="#" className="sidebar-link">FAQ</a>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-header">
                <FaBook className="sidebar-icon" />
                <span>INTEGRATION GUIDES</span>
              </div>
              <a href="#" className="sidebar-link">Overview</a>
              
              <div className="sidebar-group">
                <div className="sidebar-group-header">
                  <span>Unity</span>
                  <FaChevronRight className="sidebar-arrow" />
                </div>
              </div>

              <div className="sidebar-group">
                <div className="sidebar-group-header">
                  <span>Unreal Engine</span>
                  <FaChevronDown className="sidebar-arrow" />
                </div>
                <div className="sidebar-sublinks">
                  <a href="#" className="sidebar-link sidebar-sublink">
                    <span>Quickstart</span>
                    <FaChevronRight className="sidebar-arrow" />
                  </a>
                  <a href="#" className="sidebar-link sidebar-sublink">
                    <span>Avatar Creator Integration</span>
                    <FaChevronRight className="sidebar-arrow" />
                  </a>
                  <a href="#" className="sidebar-link sidebar-sublink">Load Avatars</a>
                  <a href="#" className="sidebar-link sidebar-sublink">
                    <span>Animations</span>
                    <FaChevronRight className="sidebar-arrow" />
                  </a>
                  <a href="#" className="sidebar-link sidebar-sublink">
                    <span>Optimize</span>
                    <FaChevronRight className="sidebar-arrow" />
                  </a>
                  <div className="sidebar-group">
                    <div className="sidebar-group-header">
                      <span>Code Samples</span>
                      <FaChevronDown className="sidebar-arrow" />
                    </div>
                    <div className="sidebar-sublinks">
                      <a href="#" className="sidebar-link sidebar-sublink active">Unreal Engine 5 samples</a>
                      <a href="#" className="sidebar-link sidebar-sublink">Lyra project integration example</a>
                      <a href="#" className="sidebar-link sidebar-sublink">VR Avatars</a>
                      <a href="#" className="sidebar-link sidebar-sublink">Unreal Engine 4</a>
                    </div>
                  </div>
                  <a href="#" className="sidebar-link sidebar-sublink">
                    <span>Troubleshooting</span>
                    <FaChevronRight className="sidebar-arrow" />
                  </a>
                  <a href="#" className="sidebar-link sidebar-sublink">Help us improve the Unreal Engine SDK</a>
                  <a href="#" className="sidebar-link sidebar-sublink">FAQ for Unreal Engine</a>
                </div>
              </div>
            </div>

            <div className="sidebar-footer">
              <div className="powered-by">
                <FaBook className="book-icon" />
                <span>Powered by GitBook</span>
              </div>
            </div>
          </nav>
        </aside>

        <main className="main-content">
          <div className="breadcrumbs">
            <FaBook className="breadcrumb-icon" />
            <a href="#" className="breadcrumb-link">INTEGRATION GUIDES</a>
            <FaChevronRight className="breadcrumb-separator" />
            <a href="#" className="breadcrumb-link">UNREAL ENGINE</a>
            <FaChevronRight className="breadcrumb-separator" />
            <span className="breadcrumb-current">CODE SAMPLES</span>
          </div>

          <div className="content">
            <h1 className="page-title">Unreal Engine 5 samples</h1>
            <p className="page-subtitle">Collection of code samples.</p>

            <div className="content-block">
              <p>
                In the following GitHub repository, you can find examples of Ready Player Me integrations into an Unreal
                Engine 5 project. Use this code as a reference for integrating Ready Player Me 3D avatars into your own
                Unreal Engine projects.
              </p>

              <p>
                For quick testing, you can also download the <a href="#" className="content-link">Windows Build</a>.
              </p>

              <p className="project-link">
                <strong>Project:</strong> <a href="https://github.com/readyplayerme/UnrealExamples" className="content-link">https://github.com/readyplayerme/UnrealExamples</a>
              </p>

              <p>Download and open the project in Unreal Engine.</p>

              <div className="project-path">
                <p>Inside the project (<code>Content > ReadyPlayerMe</code> folder) you can find examples for:</p>
              </div>

              <ul className="features-list">
                <li>Animation retargeting</li>
                <li>Web Avatar Creator integration</li>
                <li>Custom Avatar Creator integration</li>
                <li>Multiplayer</li>
                <li>Facial tracking with Live Link</li>
                <li>In-engine Rendering</li>
                <li>Avatar Preloading</li>
                <li>Avatar Config setup</li>
              </ul>

              <div className="github-box">
                <div className="github-header">
                  <FaGithub className="github-icon" />
                  <div className="github-title">
                    <div>GitHub - readyplayerme/UnrealExamples: ReadyPlayerMe integration into UE5 examples</div>
                    <div className="github-subtitle">GitHub</div>
                  </div>
                  <FaChevronRight className="github-arrow" />
                </div>
              </div>

              <div className="image-container">
                <img src="https://example.com/placeholder-image.png" alt="Unreal Engine Screenshot" className="content-image" />
              </div>
            </div>
          </div>

          <div className="feedback-section">
            <div className="feedback-question">Was this helpful?</div>
            <div className="feedback-buttons">
              <button className="feedback-btn"><FaThumbsDown /></button>
              <button className="feedback-btn"><FaMeh /></button>
              <button className="feedback-btn"><FaThumbsUp /></button>
            </div>
          </div>
        </main>
      </div>

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

export default App;
