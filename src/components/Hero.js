import React from 'react';

export default function Hero() {
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
      <div className="hero-portfolio-info">
        <h3>Portfolio Highlights</h3>
        <ul className="portfolio-list">
          <li>
            <strong>Project Name:</strong> E-Commerce Platform<br />
            <span>Built with React, Node.js, and MongoDB</span>
          </li>
          <li>
            <strong>Project Name:</strong> Portfolio Website<br />
            <span>Designed with HTML, CSS, and JavaScript</span>
          </li>
          <li>
            <strong>Project Name:</strong> Task Management App<br />
            <span>Developed using React and Supabase</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

