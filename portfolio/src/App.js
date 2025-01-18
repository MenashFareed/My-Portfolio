import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
