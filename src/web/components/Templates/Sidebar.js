import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Member from '../../../containers/Member';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import { Sidebar } from '../UI/Sidebar';

const Template = ({ pageTitle, children }) => (
  <div>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <Member Layout={Header} />
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md="10" sm="9" className="px-sm-5 py-sm-5 ml-sm-auto">
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  </div>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: 'React App',
};

export default Template;
