/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
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
    paddingTop: AppSizes.statusBarHeight,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5), 10),
    fontWeight: '500',
    marginTop: 10,
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
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    user: null,
  }

  constructor() {
    super();

    this.state = {
      menu: [
        {
          title: 'Recipes',
          onPress: () => { this.props.closeSideMenu(); Actions.app(); },
        },
        {
          title: 'Example Link',
          onPress: () => { this.props.closeSideMenu(); Actions.comingSoon(); },
        },
      ],
    };
  }

  login = () => {
    this.props.closeSideMenu();
    Actions.login();
  }

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

  render = () => {
    const { menu } = this.state;

    // Build the actual Menu Items
    const menuItems = [];
    menu.map((item) => {
      const { title, onPress } = item;

      return menuItems.push(
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={onPress}
        >
          <View style={[styles.menuItem]}>
            <Text style={[styles.menuItem_text]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>,
      );
    });

    return (
      <View style={[styles.container]}>
        <View style={[styles.backgroundFill]} />

        <View style={[styles.menuContainer]}>
          <View style={[styles.menu]}>{menuItems}</View>

          <View style={[styles.menuBottom]}>
            {this.props.user && this.props.user.name ?
              <View>
                <Text
                  style={[
                    styles.menuBottom_text,
                    AppStyles.textCenterAligned,
                  ]}
                >
                  Logged in as:{'\n'}
                  {this.props.user.name}
                </Text>

                <Spacer size={10} />

                <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                  <Button
                    small
                    title={'Log Out'}
                    onPress={this.logout}
                  />
                </View>
              </View>
            :
              <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                <Button
                  small
                  title={'Log In'}
                  onPress={this.login}
                />
              </View>
            }
          </View>
        </View>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default Menu;
