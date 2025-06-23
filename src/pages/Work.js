import React from 'react';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A modern weather application with real-time weather data, 5-day forecasts, and location-based weather tracking. Features beautiful UI with weather animations and responsive design.",
      technologies: ["React", "JavaScript", "Weather API", "CSS3", "Geolocation"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with product catalog, shopping cart, user authentication, payment integration, and order management system.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Travel Blog",
      description: "A beautiful travel blog platform with content management, image galleries, user comments, and social sharing features. Perfect for travel enthusiasts.",
      technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Express.js"],
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Admin Dashboard",
      description: "Comprehensive admin dashboard with analytics, user management, data visualization, and real-time monitoring capabilities for business operations.",
      technologies: ["React", "Chart.js", "Material-UI", "Firebase", "Redux"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Modern restaurant website with online menu, table reservations, order management, and customer reviews. Features elegant design and smooth animations.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "News Portal",
      description: "Dynamic news portal with real-time news updates, category filtering, search functionality, and user engagement features for staying informed.",
      technologies: ["React", "News API", "Redux", "Bootstrap", "Node.js"],
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    },
    {
      id: 7,
      title: "Learning Platform",
      description: "Interactive e-learning platform with course management, video streaming, progress tracking, quizzes, and certification system for online education.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "In Progress"
    },
    {
      id: 8,
      title: "Event Booking Site",
      description: "Comprehensive event booking platform with event listings, ticket purchasing, seat selection, payment processing, and event management tools.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Calendar API"],
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "In Progress"
    },
    {
      id: 9,
      title: "Music Streaming App",
      description: "Modern music streaming application with playlist management, audio player controls, user profiles, and social features for music lovers.",
      technologies: ["React", "Node.js", "MongoDB", "Web Audio API", "Socket.io"],
      image: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "In Progress"
    },
    {
      id: 10,
      title: "Job Board Platform",
      description: "Professional job board with job listings, application tracking, employer profiles, candidate matching, and advanced search capabilities.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Truepele001",
      live: "#",
      status: "Completed"
    }
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 88 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 82 },
    { name: "Express.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "GraphQL", level: 75 },
    { name: "Redux", level: 88 },
    { name: "Socket.io", level: 80 }
  ];

  return (
    <div className="work-page">
      <div className="work-container">
        {/* Header Section */}
        <div className="work-header">
          <h1 className="work-title">My Work</h1>
          <p className="work-subtitle">
            A comprehensive showcase of full-stack applications and innovative digital solutions I've built
          </p>
        </div>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Technical Expertise</h2>
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
                        View Code
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
                          Live Demo
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
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's collaborate and turn your ideas into powerful digital solutions</p>
            <div className="cta-actions">
              <a href="/contact" className="cta-button primary">
                Start a Project
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
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}