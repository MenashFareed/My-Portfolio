import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      year: "2025",
      image: "/path-to-image.jpg", // Placeholder
      description: `Personal portfolio website with interactive elements and modern design. 
      This will always been under construction. and continous updates. Feedback, comments, and suggestions are alwayswelcome.`,
      techStack: ["React", "TailwindCSS", "CSS3", "JavaScript"],
      color: "#FF0080" // Neon Pink
    },
    {
      id: 2,
      title: "Demo Search - Capstone",
      year: "2024",
      image: "/path-to-image.jpg",
      description: `Training a large language model to extract demographic values from text. It ensures accurate and efficient
      demographic identification for data analysis and market research.`,
      techStack: ["LLM", "TensorFlow", "MongoDB", "Python"],
      color: "#00FFFF" // Cyan
    },
    {
      id: 3,
      title: "Be/Become Better",
      year: "2022",
      image: "/path-to-image.jpg",
      description: `A dynamic webapp for tracking exercise goals with real-time progress charts, built using React and Firebase.
      Users log exercises, view dynamic graphs, and gain insights.`,
      techStack: ["React", "Firebase", "CSS3", "JavaScript"],
      color: "#FF00FF" // bright neon purple
    },
    
  ];

  return (
    <div className="projects-container">
      <Link to="/My-Portfolio/" className="back-button">
        ← Back
      </Link>

      <div className="projects-header">
        <div className="header-subtitle">My Work</div>
        {/* <div className="header-title">PROJECTS</div> */}
      </div>

      <div className="cards-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`card ${hoveredCard === project.id ? 'hovered' : ''}`}
            style={{ '--card-color': project.color }}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h2 className="card-title">{project.title}</h2>
                    <span className="card-year">{project.year}</span>
                  </div>
                  <p className="card-description">{project.description}</p>
                </div>
                <div className="card-tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-shine"></div>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;