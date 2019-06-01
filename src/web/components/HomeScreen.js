import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Jumbotron, Button } from 'reactstrap';

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Jumbotron className="bg-primary text-white">
            <h1>Avalonie Pepperoni</h1>
            <sub>Who ruined the pizza?!</sub>
          </Jumbotron>
        </Row>
        <Row className="pt-md-2">
          <Col xs="12" md="4" className="pt-3 pt-md-0">
            <div>
              <Button>Join Room!</Button>
              <Button>Create Room!</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeScreen;
