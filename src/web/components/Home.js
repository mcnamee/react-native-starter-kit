import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>Web & Mobile App Starter Kit</h1>
        <p className="lead">For when you're looking to build 'the next big thing', but don't want to start from scratch.</p>
        <p>This App Starter Kit is built for those who need both a web app + mobile app, and don't want to write and maintain two different code bases. The project shares the 'business logic' and allows flexibility in View components to ensure your project looks and feels native in each platform.</p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4">
        <h3><i class="icon-map" /> Routing</h3>
        <p>React Router is used to handle all web-side routing.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router" className="btn btn-primary">
            React Router Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4">
        <h3><i class="icon-fire" /> Firebase</h3>
        <p>Firebase is all ready to go with examples on how to read/write data to/from Firebase.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/database/web/start" className="btn btn-primary">
            Firebase Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4">
        <h3><i class="icon-organization" /> Redux</h3>
        <p>State management the 'clean way' via Redux is setup with examples - woohoo!</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/docs/introduction/" className="btn btn-primary">
            Redux Docs
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-5 pb-5">
      <Col xs="12" md="4">
        <h3><i class="icon-layers" /> Redux Persist</h3>
        <p>Persist the data stored in Redux for faster load times without needing to hit the server each page load.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rt2zz/redux-persist" className="btn btn-primary">
            Redux Persist Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4">
        <h3><i class="icon-drop" /> Web Styles</h3>
        <p>Webpack, SCSS, Bootstrap and ReactStrap - ready at your fingertips.</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://reactstrap.github.io/components/alerts/" className="btn btn-primary">
            ReactStrap Docs
          </a>
        </p>
      </Col>
      <Col xs="12" md="4">
        <h3><i class="icon-user-following" /> Auth</h3>
        <p>Most apps need user authentication. This one comes ready to go with Firebase Auth - but you can easily change that within the `/actions/member.js`</p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/docs/auth/" className="btn btn-primary">
            Firebase Auth Docs
          </a>
        </p>
      </Col>
    </Row>
  </div>
);

export default About;
