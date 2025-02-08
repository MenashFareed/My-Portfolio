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
            Software Engineer | Full Stack Developer | Cybersecurity Enthusiast
          </div>
        </div>

        {/* Bio Section */}
        <div className="bio-section neon-box">
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            Hi! I'm Menash, an enthusiastic software engineer with a drive for
            crafting intuitive web applications and solving complex challenges.
            With a strong foundation in both front-end and back-end development,
            I specialize in creating, scaling, and maintaining seamless, user-centric 
            experiences while maintaining robust security practices.
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
          </p>
        </div>

        {/* Quick Facts */}
        <div className="facts-section neon-box">
          <h2 className="section-title">Quick Facts</h2>
          <div className="facts-grid">
            <div className="fact-item">
              <span className="fact-number">3+</span>
              <span className="fact-label">Years Experience</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">15+</span>
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
