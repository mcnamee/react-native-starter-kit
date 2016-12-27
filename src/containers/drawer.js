/**
 * Whole App Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
import { DefaultRenderer } from 'react-native-router-flux';

// App Globals
import AppConfig from '@constants/config';

// Containers
import Menu from '@containers/menu';

/* Redux ==================================================================== */
// Actions
import * as SideMenuActions from '@reducers/sidemenu/actions';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

/* Component ==================================================================== */
class Drawer extends Component {
  static componentName = 'Drawer';

  static propTypes = {
    navigationState: PropTypes.shape({}),
    onNavigate: PropTypes.func,
    sideMenuIsOpen: PropTypes.bool.isRequired,
    closeSideMenu: PropTypes.func.isRequired,
    toggleSideMenu: PropTypes.func.isRequired,
  }

  /**
    * Toggle Side Menu
    */
  onSideMenuChange = (isOpen) => {
    if (isOpen !== this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <SideMenu
        ref={(a) => { this.rootSidebarMenu = a; }}
        openMenuOffset={AppConfig.windowWidth * 0.75}
        menu={
          <Menu
            closeSideMenu={this.props.closeSideMenu}
            ref={(b) => { this.rootSidebarMenuMenu = b; }}
          />
        }
        isOpen={this.props.sideMenuIsOpen}
        onChange={this.onSideMenuChange}
        disableGestures={false}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </SideMenu>
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
