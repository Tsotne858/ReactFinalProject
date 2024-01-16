import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from '../components/About';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/AboutPage.css'; // Import the CSS file

const AboutPage = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, x: '-100vw' },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
    >
      <div className="header">
        <h1>About Us</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <About />
      <div className="section">
        <div className="content">
          <h2>Our Story</h2>
          <p>This is the story of our amazing company...</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
