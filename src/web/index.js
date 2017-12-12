/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import configureStore from '../store/index';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/index';

// Components
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';

// Load css
require('./styles/style.scss');

const store = configureStore();
const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Sidebar />
            <Col md="10" sm="9" className="pt-3 ml-sm-auto">
              <Routes />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  </Provider>
);

render(<Root />, rootElement);
registerServiceWorker();
