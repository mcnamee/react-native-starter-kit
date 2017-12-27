import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Navbar,
  Collapse,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Config from '../../constants/config';
import { SidebarNavItems } from './Sidebar';

class Header extends Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    logout: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    member: {},
  }

  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = { isOpen: false };
  }

  onLogout = () => this.props.logout().then(() => this.props.history.push('/login'));

  toggleDropDown = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { member } = this.props;
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
                      <DropdownItem>
                        <Link to="/update-profile">Update Profile</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <a onClick={this.onLogout}>Logout</a>
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

export default withRouter(Header);
