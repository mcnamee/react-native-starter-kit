import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Row>
    <Col lg="4">
      <h2>404</h2>
      <p>Sorry, the route you requested does not exist</p>
      <p>
        <Button color="primary">
          <Link to="/" role="button">Go Home &raquo;</Link>
        </Button>
      </p>
    </Col>
  </Row>
);

export default NotFound;
