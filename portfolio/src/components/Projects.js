import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website - Live",
      year: "2024",
      media: {
        type: "video",
        url: process.env.PUBLIC_URL + "/Portfolio_Demo.mp4",
        thumbnail: ""
      },
      description: "Personal portfolio website with interactive elements and modern design",
      techStack: ["React", "Three.js", "CSS3", "JavaScript"],
      color: "#FF0080"
    },
    {
      id: 2,
      title: "Rust Chat App",
      year: "2025",
      media: {
        type: "video",
        url: process.env.PUBLIC_URL + "/Chat_App_Demo.mp4",
        thumbnail: ""
      },
      description: `A real-time chat application built with Rust, leveraging the Tokio and Warp crates for concurrency 
      and networking. Users can join rooms, send messages, and experience low-latency communication.`,
      techStack: ["Rust", "Tokio", "Warp", "WebSockets"],
      color: "#FFA500" // bright orange
    },
    {
      id: 3,
      title: "Be/Become Better - Live",
      year: "2022",
      media: {
        type: "video",
        url: process.env.PUBLIC_URL + "/BeBetter_Demo.mp4",
        thumbnail: "/path-to-thumbnail.jpg"
      },
      description: `A dynamic webapp for tracking exercise goals with real-time progress charts, built using React and Firebase. 
      Users log exercises, view dynamic graphs, and gain insights.`,
      projectLink: "https://activity-tracker-9df33.web.app/sign-in",
      techStack: ["React", "Firebase", "CSS3", "JavaScript","user Authentication"],
      color: "#FF00FF"
    },
    {
      id: 4,
      title: "Go Weather App",
      year: "2025",
      media: {
        type: "video",
        url: process.env.PUBLIC_URL + "/Weather_App_Demo.mp4",
        thumbnail: "/path-to-thumbnail.jpg" // Fallback image
      },
      description: `A RESTful web application that fetches and displays real-time weather data for any location using the 
      OpenWeatherMap API. Built with Go and Gorilla Mux, it provides users with current weather conditions and forecasts.`,
      techStack: ["Golang", "API Integration", "Real-Time Data"],
      color: "#00FFFF" // bright neon purple
    },
    
  ];

  const handleVideoPlay = (videoElement) => {
    console.log("Attempting to play video:", videoElement);
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  };

  const handleVideoPause = (videoElement) => {
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

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
        {projects.map((project) => (
          <div
            key={project.id}
            className={`card ${hoveredCard === project.id ? 'hovered' : ''}`}
            style={{ '--card-color': project.color }}
            onMouseEnter={() => {
              setHoveredCard(project.id);
              if (project.media.type === 'video') {
                const video = document.querySelector(`#video-${project.id}`);
                handleVideoPlay(video);
              }
            }}
            onMouseLeave={() => {
              setHoveredCard(null);
              if (project.media.type === 'video') {
                const video = document.querySelector(`#video-${project.id}`);
                handleVideoPause(video);
              }
            }}
          >
            <div className="card-inner">
              <div className="card-front">
                <div className="card-media">
                  {project.media.type === 'video' ? (
                    <>
                      <video
                        id={`video-${project.id}`}
                        className="project-video"
                        loop
                        muted
                        playsInline
                        poster={project.media.thumbnail}
                        preload="auto"
                      >
                        <source 
                          src={project.media.url} 
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-overlay"></div>
                    </>
                  ) : (
                    <>
                      <img src={project.media.url} alt={project.title} />
                      <div className="image-overlay"></div>
                    </>
                  )}
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h2 className="card-title">{project.title}</h2>
                    <span className="card-year">{project.year}</span>
                  </div>
                  <p className="card-description">
                    {project.description}
                    {project.projectLink && (
                      <a 
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Site →
                      </a>
                    )}
                  </p>
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