import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => (
  <Row>
    <Col lg="4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p>
      <Link to="/" className="btn btn-primary">View details &raquo;</Link>
      </p>
    </Col>
    <Col lg="4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p>
      <Link to="/" className="btn btn-primary">View details &raquo;</Link>
      </p>
    </Col>
    <Col lg="4">
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
      <p>
      <Link to="/" className="btn btn-primary">View details &raquo;</Link>
      </p>
    </Col>
  </Row>
);

export default About;
