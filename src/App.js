import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import NotFound from './pages/NotFound';
import { Route, Routes, useLocation, useNavigationType } from "react-router-dom";
import Work from './pages/Work';
import './styles/general.css';


const App = () => {
  const location = useLocation();
  return (
      <>
      <Navigation />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>    
  );
};

export default App;
