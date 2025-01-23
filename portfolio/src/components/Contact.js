import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [hoveredMethod, setHoveredMethod] = useState(null);
  const [copied, setCopied] = useState(false);

  const contactMethods = [
    {
      id: 1,
      type: 'Email',
      value: 'qmenas.h@gmail.com',
      icon: '✉️',
      color: '#FF0080', // Neon Pink
      description: 'Reach out via email for professional inquiries'
    },
    {
      id: 2,
      type: 'LinkedIn',
      value: 'https://www.linkedin.com/in/menashf/',
      icon: '💼',
      color: '#00FFFF', // Cyan
      description: 'Connect with me professionally'
    },
  ];

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-glow');
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="contact-container">
      <div className="cursor-glow"></div>
      <Link to="/" className="back-button">
        ← Back
      </Link>

      <div className="contact-header">
        <div className="header-subtitle">Get in Touch</div>
        <div className="header-title">CONTACT ME</div>
      </div>

      <div className="contact-grid">
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className="contact-card"
            style={{ '--card-color': method.color }}
            onMouseEnter={() => setHoveredMethod(method.id)}
            onMouseLeave={() => setHoveredMethod(null)}
            onClick={() => handleCopy(method.value)}
          >
            <div className="card-content">
              <div className="method-icon">{method.icon}</div>
              <h3 className="method-type">{method.type}</h3>
              <p className="method-value">{method.value}</p>
              <p className="method-description">{method.description}</p>
              <div className="copy-indicator">Click to copy</div>
            </div>
            <div className="card-border"></div>
            {hoveredMethod === method.id && (
              <div className="card-particles">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="particle"></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {copied && (
        <div className="copy-notification">
          Copied to clipboard!
        </div>
      )}

      <div className="contact-message">
        <p>Let's create something amazing together</p>
        <div className="message-glow"></div>
      </div>
    </div>
  );
};

export default Contact;