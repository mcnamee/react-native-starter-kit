/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const MENU_BG_COLOR = '#2E3234';

const styles = StyleSheet.create({
  backgroundFill: {
    backgroundColor: MENU_BG_COLOR,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
  },

  // Main Menu
  menu: {
    flex: 3,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
    padding: 20,
    paddingTop: AppSizes.statusBarHeight + 20,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 16,
    lineHeight: parseInt(16 + (16 * 0.5), 10),
    fontWeight: '500',
    marginTop: 14,
    marginBottom: 8,
    color: '#EEEFF0',
  },

  // Menu Bottom
  menuBottom: {
    flex: 1,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  menuBottom_text: {
    color: '#EEEFF0',
  },
});

/* Component ==================================================================== */
class Menu extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    closeSideMenu: PropTypes.func.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
    }),
    unauthMenu: PropTypes.arrayOf(PropTypes.shape({})),
    authMenu: PropTypes.arrayOf(PropTypes.shape({})),
  }

  static defaultProps = {
    user: null,
    unauthMenu: [],
    authMenu: [],
  }

  /**
   * On Press of any menu item
   */
  onPress = (action) => {
    this.props.closeSideMenu();
    if (action) action();
  }

  /**
   * On Logout Press
   */
  logout = () => {
    if (this.props.logout) {
      this.props.logout()
        .then(() => {
          this.props.closeSideMenu();
          Actions.login();
        }).catch(() => {
          Alert.alert('Oh uh!', 'Something went wrong.');
        });
    }
  }

  /**
   * Each Menu Item looks like this
   */
  menuItem = item => (
    <TouchableOpacity
      key={`menu-item-${item.title}`}
      onPress={() => this.onPress(item.onPress)}
    >
      <View style={[styles.menuItem]}>
        <Text style={[styles.menuItem_text]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  )

  /**
   * Build the Menu List
   */
  menuList = () => {
    // Determine which menu to use - authenticated user menu or unauthenicated version?
    let menu = this.props.unauthMenu;
    if (this.props.user && this.props.user.email) menu = this.props.authMenu;

    return menu.map(item => this.menuItem(item));
  }

  render = () => (
    <View style={[styles.container]}>
      <View style={[styles.backgroundFill]} />

      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>{this.menuList()}</View>

        <View style={[styles.menuBottom]}>
          {this.props.user && this.props.user.email ?
            <View>
              <Text
                style={[
                  styles.menuBottom_text,
                  AppStyles.textCenterAligned,
                ]}
              >
                Logged in as:{'\n'}
                {this.props.user.email}
              </Text>

              <Spacer size={10} />

              <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                <Button small title={'Log Out'} onPress={this.logout} />
              </View>
            </View>
          :
            <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
              <Button small title={'Log In'} onPress={() => this.onPress(Actions.login)} />
            </View>
          }
        </View>
      </View>
    </View>
  )
}

/* Export Component ==================================================================== */
export default Menu;
