import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = { isOpen: false };
  }

  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    logout: PropTypes.func.isRequired,
  }

  static defaultProps = {
    member: {},
  }

  toggleDropDown = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { logout, member } = this.props;
    const loggedIn = !!(member && member.email);

    return (
      <header>
        <Navbar dark color="primary" expand="sm" className="fixed-top">
          <Link to="/" className="navbar-brand" style={{ color: '#FFF' }}>
            {Config.appName}
          </Link>
          <NavbarToggler onClick={this.toggleDropDown} />
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
                <DropdownMenu>
                  {!loggedIn &&
                    <div>
                      <DropdownItem>
                        <Link to="/login">Login</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/sign-up">Sign Up</Link>
                      </DropdownItem>
                    </div>
                  }
                  {loggedIn &&
                    <div>
                      <DropdownItem divider />
                      <DropdownItem>
                        <a onClick={logout}>Logout</a>
                      </DropdownItem>
                    </div>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
