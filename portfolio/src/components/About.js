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
            Hi! I'm Menash, a passionate software engineer with a love for crafting 
            intuitive web applications and solving complex challenges. With experience 
            in React, .NET, and cybersecurity, I thrive at the intersection of innovation 
            and technology.
          </p>
        </div>

        {/* Skills Section */}
        <div className="skills-section mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', '.NET', 'TypeScript', 'Node.js', 'Tailwind CSS', 'NestJS', 'AWS'].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-section">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h2>
          <div className="text-left">
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold text-lg text-gray-700">2024</h3>
                <p className="text-gray-600">Completed a software engineering degree from Western University.</p>
              </li>
              <li>
                <h3 className="font-bold text-lg text-gray-700">2023</h3>
                <p className="text-gray-600">Built projects like RENTRABBIT and Demo Search using React and machine learning.</p>
              </li>
              <li>
                <h3 className="font-bold text-lg text-gray-700">2025</h3>
                <p className="text-gray-600">Working on a fantasy sports app using React Native and AWS.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
