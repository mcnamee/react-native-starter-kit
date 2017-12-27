import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import App from '../../containers/App';
import Header from './Header';
import Footer from './Footer';
import { Sidebar } from './Sidebar';

const Template = ({ children }) => (
  <div>
    <App Layout={Header} />
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md="10" sm="9" className="pl-5 pr-5 pt-5 ml-sm-auto">
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  </div>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
