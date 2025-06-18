import React from 'react';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics dashboard that uses machine learning to provide insights and predictions for business data visualization.",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
      technologies: ["React", "Next.js", "Supabase", "Mapbox", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A unified social media management dashboard for scheduling posts, analyzing engagement, and managing multiple social media accounts.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Chart.js"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "An interactive learning platform with video streaming, progress tracking, quizzes, and certification management for online education.",
      technologies: ["React", "Express.js", "MongoDB", "AWS S3", "WebRTC"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "In Progress"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 },
    { name: "GraphQL", level: 70 }
  ];

  return (
    <div className="work-page">
      <div className="work-container">
        {/* Header Section */}
        <div className="work-header">
          <h1 className="work-title">My Work</h1>
          <p className="work-subtitle">
            A showcase of projects that demonstrate my passion for creating innovative digital solutions
          </p>
        </div>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      {project.live !== "#" && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="work-cta">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>Let's discuss how I can help bring your ideas to life</p>
            <div className="cta-actions">
              <a href="/contact" className="cta-button primary">
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Truepele001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}