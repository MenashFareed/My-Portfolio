import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BubbleLanding from './components/BubbleLanding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/My-Portfolio/" element={<BubbleLanding />} />
        <Route path="/My-Portfolio/about" element={<About />} />
        <Route path="/My-Portfolio/skills" element={<Skills />} />
        <Route path="/My-Portfolio/projects" element={<Projects />} />
        <Route path="/My-Portfolio/experience" element={<Experience />} />
        <Route path="/My-Portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
