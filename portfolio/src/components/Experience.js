import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

const Experience = () => {
  const timelineRefs = useRef([]);

  const experiences = [
    {
      year: "2024 - Present",
      title: "Software Developer",
      company: "The Digital Group, Princeton, USA",
      description: `Designs and implements scalable, client-focused software solutions by analyzing business needs, optimizing
      workflows, and integrating cutting-edge technologies. Designs and implements software applications, 
      increasing system efficiency by 25% and contributing to
      projects that generate $500K+ in annual revenue.`,
      technologies: ["React", "Node.js", "ASP.NET", "Azure", "Client Management"],
      color: "#FF0080", // Neon Pink
    },
    {
      year: "2023 - 2024",
      title: "Digital Lead",
      company: "Western University, London, Canada",
      description: `Drove digital transformation by strategizing and executing innovative campaigns, enhancing online presence,
      and leading cross-functional teams to achieve business goals, increasing engagement by 30%.`,
      technologies: ["Cascade", "Python", "GCP", "Team Management", "PHP"],
      color: "#00FFFF", // Cyan
    },
    {
      year: "2023 - 2023",
      title: "Applications Developer Intern",
      company: "Datec Fiji LTD Pte, Suva, Fiji",
      description: `Developed, tested, and maintained robust, user-centric applications, delivering scalable solutions that
      enhance performance and support to over 100,000 active users.`,
      technologies: [".NET", "Legacy Software", "Power BI", "Git"],
      color: "#FFE100", // Yellow
    },
    {
      year: "2022 - 2023",
      title: "Software Developer Co-op",
      company: "Nojumi Solutions, Toronto, Canada",
      description: `Built and optimized software systems, delivering solutions that reduce processing time and support seamless
      operations. Cross-collaborated with our own law firm to understand clients demands and integrate requirements.`,
      technologies: ["Angular", "Scala", "API Integration", "Github"],
      color: "#00FF80", // Neon Green
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="experience-container">
      <Link to="/My-Portfolio/" className="back-button">
        ← Back
      </Link>

      <div className="experience-header">
        <div className="header-subtitle">My Journey</div>
        {/* <div className="header-title">CAREER PATH</div> */}
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            ref={(el) => (timelineRefs.current[index] = el)}
            className="timeline-item"
            style={{ "--accent-color": experience.color }}
          >
            <div className="timeline-content">
              <div className="timeline-year">{experience.year}</div>
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <h2 className="timeline-title">{experience.title}</h2>
                <h3 className="timeline-company">{experience.company}</h3>
                <p className="timeline-description">{experience.description}</p>
                <div className="timeline-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
