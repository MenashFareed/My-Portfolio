import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Link to="/My-Portfolio/" className="back-button">
        ← Back
      </Link>
      
      {/* Header Section 
      <div className="about-header">
        <div className="header-text">
          <div className="header-subtitle">Get to know</div>
          <div className="header-title">MENASH FAREED</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="about-content">
        {/* Profile Section */}
        <div className="profile-section neon-box">
          <img
            src={process.env.PUBLIC_URL + "/media/pp.jpg"}
            alt="Profile"
            className="profile-image"

          />
          <div className="profile-title">Menash Fareed</div>
          <div className="profile-subtitle">
            Senior Data Analyst | Full Stack Developer | Cybersecurity Enthusiast
          </div>
        </div>

        {/* Bio Section */}
        <div className="bio-section neon-box">
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            Hi! I'm Menash, a senior data analyst with a background in software engineering. 
            With a strong foundation in both technical and leadership roles,
            I specialize in designing, scaling, and maintaining seamless, user-centric databases and 
            business intelligence dashboards, while maintaining robust security practices.
          </p>
          <p className="bio-text">
            I obtained my Bachelor's degree in Software Engineering from the 
            University of Western Ontario, Canada. In addition, I had completed
            a co-op along with a standing on the honour roll. 
          </p>
          <p className="bio-text">
            My journey in technology started in my first year of university, where I 
            was introduced to the world of software development. After passing my first 
            CS course I knew that this was the engineering field I wanted to pursue.
          </p>
          <p className="bio-text">
            Aside from the techincal life, I am a huge sports fan. I'd play anything from
            fencing to soccer to volleyball.
          </p>
          <p className="bio-text">
            I also have an interest towards gaming. Halo, Valorant, and TFT would be my top 3
            recommendations.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="facts-section neon-box">
          <h2 className="section-title">Quick Facts</h2>
          <div className="facts-grid">
            <div className="fact-item">
              <span className="fact-number">4+</span>
              <span className="fact-label">Years Experience</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">25+</span>
              <span className="fact-label">Projects Completed</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">15+</span>
              <span className="fact-label">Technologies & Languages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
