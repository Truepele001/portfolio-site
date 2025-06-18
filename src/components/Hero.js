import React from 'react';
import './Hero.css';

export default function Hero() {
  const handleViewWork = () => {
    window.open('https://github.com/Truepele001', '_blank');
  };

  const handleDownloadCV = () => {
    // You can replace this with an actual CV download link
    alert('CV download will be available soon!');
  };

  return (
    <section className="hero">
      <h6 className="hero-logo">Pitt.dev</h6>
      <h1>Welcome to Pitt.dev</h1>
      <h2 className="hero-role">Junior Frontend Engineer & AI Enthusiast</h2>
      <p>
        I am a passionate developer specializing in creating modern, responsive, and user-friendly web applications.<br />
        Let's build something amazing together.
      </p>
      <div className="hero-meta">
        <span>📍 Nairobi, Kenya</span>
       <br />
        <span>🟢 Open to new opportunities</span>
      </div>
      <div className="hero-actions">
        <button className="cta-button">Explore My Work</button>
        <a href="/resume.pdf" className="cta-button outline" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:youremail@example.com">
          <img src="/icons/email.svg" alt="Email" />
        </a>
      </div>
    </section>
  );
}