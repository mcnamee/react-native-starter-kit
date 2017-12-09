import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Routes
import Home from './Home';
import NotFound from '../components/404';
import About from '../components/About';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
