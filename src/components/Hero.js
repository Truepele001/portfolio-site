import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-indicator"></span>
            Breaking News
          </div>
          
          <h1 className="hero-title">
            Stay <span className="highlight">Informed</span> with Global News
          </h1>
          
          <h2 className="hero-subtitle">
            Your trusted source for breaking news and in-depth analysis
          </h2>
          
          <p className="hero-description">
            Get real-time news updates from credible sources worldwide. 
            Stay connected with comprehensive coverage, expert analysis, 
            and breaking stories that matter most.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Live Coverage</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">News Sources</span>
            </div>
            <div className="stat">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Daily Readers</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              <span>Read Latest News</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '#categories'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6H20M4 12H20M4 18H20"/>
              </svg>
              Browse Categories
            </button>
          </div>
          
          <div className="hero-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1V5M12 19V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H5M19 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22"/>
            </svg>
            <span>Global News Coverage</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-image">
              <div className="image-placeholder">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8Z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card tech-card">
                <span>Breaking</span>
              </div>
              <div className="floating-card tech-card">
                <span>Politics</span>
              </div>
              <div className="floating-card tech-card">
                <span>Sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="breaking-news-ticker">
        <div className="ticker-content">
          <span className="ticker-label">Breaking</span>
          <span>Latest updates from around the world • Global markets respond to economic changes • Technology sector sees major developments • Sports headlines from international competitions</span>
        </div>
      </div>
    </section>
  );
}