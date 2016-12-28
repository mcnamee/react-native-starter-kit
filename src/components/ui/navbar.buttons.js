/**
 * Navbar Elements
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes, Component } from 'react';
import {
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

// App Globals
import AppConfig from '@constants/config';

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
};

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Button
  navbarButton: {
    top: 2,
  },
});

/* Navbar Left Button Component ========================================================= */
const Menu = ({ toggleSideMenu, sideMenuIsOpen }) => (
  <TouchableOpacity
    onPress={toggleSideMenu}
    activeOpacity={0.7}
    style={styles.navbarButton}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Icon name={'menu'} size={32} color={'#FFF'} />
  </TouchableOpacity>
);

Menu.propTypes = {
  sideMenuIsOpen: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

/* Export Component ==================================================================== */
exports.NavbarMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);
