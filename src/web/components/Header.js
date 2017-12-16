import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Collapse,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Config from '../../constants/config';
import { SidebarNavItems } from './Sidebar';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <header>
        <Navbar dark color="primary" expand="sm" className="fixed-top">
          <Link to="/" className="navbar-brand" style={{ color: '#FFF' }}>
            {Config.appName}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className="d-block d-sm-none">
                {SidebarNavItems()}
              </div>
              <NavItem>
                <NavLink href="https://reactstrap.github.io/components/">Components</NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Link to="/login">Login</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/sign-up">Sign Up</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
