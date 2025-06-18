import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleViewWork = () => {
    window.location.href = '/work';
  };

  const handleDownloadCV = () => {
    // You can replace this with an actual CV download link
    alert('CV download will be available soon!');
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-indicator"></span>
            Available for work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Peter Wasonga</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Junior Frontend Engineer & AI Enthusiast
          </h2>
          
          <p className="hero-description">
            I craft beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life 
            through innovative digital solutions.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={handleViewWork}>
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={handleDownloadCV}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </button>
          </div>
          
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10C21 17L12 23L3 10C3 6 7 2 12 2S21 6 21 10Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-placeholder">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21V19A4 4 0 0 0 16 15H8A4 4 0 0 0 4 19V21"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card tech-card">
                <span>React</span>
              </div>
              <div className="floating-card tech-card">
                <span>JavaScript</span>
              </div>
              <div className="floating-card tech-card">
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}