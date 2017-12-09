import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/index';

// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <Routes />
            </main>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
