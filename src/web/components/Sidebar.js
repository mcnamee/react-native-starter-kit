import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block bg-light sidebar">
      <Nav vertical>
        <NavItem>
          <Link className="nav-link" to="/">Overview</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/about">Reports</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/about">Analytics</Link>
        </NavItem>
      </Nav>
    </Col>
  </div>
);

export default Sidebar;
