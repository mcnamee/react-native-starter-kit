import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../containers/Home';

const Index = () => (
  <Router>
    <Route exact path="/" component={Home}/>
  </Router>
);

export default Index;
