import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/components/Background.scss'
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <App />
      </Router>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);

