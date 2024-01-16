import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm';
import useStorage from '../hooks/useStorage';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/LoginPage.css';


const LoginPage = () => {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser, clearLoggedInUser] = useStorage('loggedInUser');
  const { theme, toggleTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, x: '-100vw' },
  };

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
  };

  const handleLogout = () => {
    clearLoggedInUser();
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
        <h1>Login</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div className="form-container">
        {loggedInUser ? (
          <div>
            <p>Welcome, {loggedInUser.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </motion.div>
  );
};


export default LoginPage;
