import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';

const Template = ({ pageTitle, children }) => (
  <Container>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <Row>
      <Col sm="12">
        {children}
      </Col>
    </Row>
  </Container>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: 'React App',
};

export default Template;
