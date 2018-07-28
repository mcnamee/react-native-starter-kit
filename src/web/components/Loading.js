import React from 'react';
import { Row, Col, Progress } from 'reactstrap';

const Loading = () => (
  <Row>
    <Col md={{ size: 6, offset: 3 }}>
      <div className="page-is-loading">
        <Progress bar animated value="100">
          Loading
        </Progress>
      </div>
    </Col>
  </Row>
);

export default Loading;
