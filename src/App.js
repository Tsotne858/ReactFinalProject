import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import useCustomHook from './hooks/useCustomHook';
import { motion } from 'framer-motion';
import DataFetching from './components/DataFetching';

const App = () => {
  const { data, loading } = useCustomHook();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    // You can implement your login logic here
    console.log('Login credentials:', credentials);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Switch>
          <Route path="/" exact render={() => <HomePage data={data} loading={loading} />} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            path="/login"
            render={() => <LoginPage onLogin={handleLogin} />}
          />
          <Route path="/data-fetching" component={DataFetching} />
        </Switch>
      </motion.div>
    </Router>
  );
};

export default App;
