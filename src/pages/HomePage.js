import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../components/Home';
import DataFetching from '../components/DataFetching';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/HomePage.css';

const HomePage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
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
        <h1>Welcome to Our Beautiful Homepage</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <Home />
      {isHomePage && <DataFetching />}
    </motion.div>
  );
};

export default HomePage;

