
import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <header className="main-header fantastic-header">
        <nav className="main-nav">
          <div className="logo">
            <span className="logo-icon">💄</span> Glamour Touch
          </div>
          <ul>
            <li className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</li>
            <li className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')}>About</li>
            <li className={page === 'gallery' ? 'active' : ''} onClick={() => setPage('gallery')}>Gallery</li>
            <li className={page === 'contact' ? 'active' : ''} onClick={() => setPage('contact')}>Contact</li>
          </ul>
        </nav>
        <div className="header-hero">
          <h1>Unleash Your Inner Beauty</h1>
          <p>Professional Makeup Artistry for Every Occasion</p>
        </div>
        <div className="header-wave"></div>
      </header>
      <main>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'gallery' && <Gallery />}
        {page === 'contact' && <Contact />}
      </main>
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">💄 Glamour Touch</div>
          <div className="footer-links">
            <span onClick={() => setPage('home')}>Home</span>
            <span onClick={() => setPage('about')}>About</span>
            <span onClick={() => setPage('gallery')}>Gallery</span>
            <span onClick={() => setPage('contact')}>Contact</span>
          </div>
          <div className="footer-socials">
            <a href="#" title="Instagram" aria-label="Instagram">📸</a>
            <a href="#" title="Facebook" aria-label="Facebook">📘</a>
            <a href="#" title="WhatsApp" aria-label="WhatsApp">💬</a>
          </div>
          <div className="footer-copy">&copy; {new Date().getFullYear()} Glamour Touch. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
