import React from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "#FF0080", // Neon Pink
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "C#", "PHP", "SQL", "Java", "Rust", "Go"]
    },
    {
      title: "Frameworks",
      color: "#00FFFF", // Cyan
      skills: ["React", "Next.js", "Vue.js", "Angular", "Redux", "Tailwind CSS", "Styled Components", "Three.js"]
    },
    {
      title: "Software/Applications",
      color: "#FFE100", // Yellow
      skills: ["GitHub", "Docker", "Vercel", "Netlify", "Webpack", "Vite", "Firebase", "AWS Amplify", "Azure", "GCP", "Legacy Software"]
    },
    {
      title: "APIs & Tools",
      color: "#00FF80", // Neon Green
      skills: ["GraphQL", "WebSockets", "gRPC", "React Testing Library", "Jest", "Cypress", "Storybook"]
    },
    {
      title: "Data Visualization",
      color: "#8000FF", // Purple
      skills: ["React ApexCharts", "D3.js", "Chart.js", "Highcharts", "Power BI", "Tableau"]
    }
  ];

  return (
    <div className="skills-container">
      <Link to="/My-Portfolio/" className="back-button">
        ← Back
      </Link>

      <div className="skills-header">
        <div className="header-subtitle">My Technical Skillset</div>
        {/* <div className="header-title">TECHNICAL SKILLS</div> */}
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category"
            style={{'--accent-color': category.color}}
          >
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-item"
                >
                  <span className="skill-text">{skill}</span>
                  <div className="skill-glow"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;