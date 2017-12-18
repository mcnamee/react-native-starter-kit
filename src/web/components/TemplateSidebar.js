import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import App from '../../containers/App';
import Header from './Header';
import { Sidebar } from './Sidebar';

const Template = ({ children }) => (
  <div>
    <App Layout={Header} />
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md="10" sm="9" className="pt-3 ml-sm-auto">
          {children}
        </Col>
      </Row>
    </Container>
  </div>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
