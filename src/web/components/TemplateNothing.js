import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const Template = ({ children }) => (
  <Container>
    <Row>
      <Col sm="12">
        {children}
      </Col>
    </Row>
  </Container>
);

Template.propTypes = { children: PropTypes.element.isRequired };

export default Template;
