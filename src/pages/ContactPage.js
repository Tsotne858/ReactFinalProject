import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/ContactPage.css'; // Import the CSS file

const ContactPage = () => {
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
        <h1>Contact Us</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <Contact />
      <div className="section">
        <div className="form-container">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;

