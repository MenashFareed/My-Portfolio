import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Section */}
        <div className="profile-section mb-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto border-4 border-gray-300 shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Menash Fareed</h1>
          <p className="text-gray-600 mt-2">
            Software Engineer | Web Developer | Cybersecurity Enthusiast
          </p>
        </div>

        {/* Introduction Section */}
        <div className="introduction-section mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi! I'm Menash, a passionate software engineer with a drive for crafting 
            intuitive web applications and solving complex challenges. 
          </p>
        </div>


      </div>
    </div>
  );
};

export default About;
