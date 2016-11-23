/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

// App Globals
import AppStyles from '../utils/styles';
import AppConfig from '../utils/config';

// Components
import StyleGuide from './style.guide';
import Login from '../containers/Login';
import Tabs from '../containers/Recipes';

/* Styles ==================================================================== */
const MENU_BG_COLOR = '#2E3234';

const styles = StyleSheet.create({
  backgroundFill: {
    backgroundColor: MENU_BG_COLOR,
    height: AppConfig.windowHeight,
    width: AppConfig.windowWidth,
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
    paddingTop: AppConfig.statusBarHeight,
  },
  menuItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#3D4346',
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
    navigate: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  constructor() {
    super();

    this.state = {
      menu: [
        { title: 'Recipes', component: Tabs },
        { title: 'Style Guide', component: StyleGuide },
      ],
    };
  }

  login = () => {
    if (this.props.navigate) this.props.navigate('Login', Login);
  }

  logout = () => {
    if (this.props.logout) {
      this.props.logout()
        .then(() => {
          if (this.props.navigate) this.props.navigate('Login', Login);
        }).catch(() => {
          Alert.alert('Oh uh!', 'Something went wrong.');
        });
    }
  }

  render = () => {
    const { navigate } = this.props;
    const { menu } = this.state;

    // Build the actual Menu Items
    const menuItems = [];
    menu.map((item) => {
      const { title, component, props } = item;

      return menuItems.push(
        <TouchableOpacity
          key={`menu-item-${title}`}
          onPress={() => navigate(title, component, props)}
        >
          <View style={[styles.menuItem]}>
            <Text style={[AppStyles.baseText, styles.menuItem_text]}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
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
                    AppStyles.baseText,
                    styles.menuBottom_text,
                    AppStyles.centered,
                  ]}
                >
                  Logged in as:{'\n'}
                  {this.props.user.name}
                </Text>

                <View style={[AppStyles.spacer_10]} />

                <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                  <Button
                    title={'Log Out'}
                    onPress={this.logout}
                    {...AppConfig.smlButtonDefaults}
                  />
                </View>
              </View>
            :
              <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                <Button
                  title={'Log In'}
                  onPress={this.login}
                  {...AppConfig.smlButtonDefaults}
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
