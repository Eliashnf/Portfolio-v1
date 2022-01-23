import React from 'react';
import Accueil from './pages/Accueil';
import NotFound from './pages/NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
