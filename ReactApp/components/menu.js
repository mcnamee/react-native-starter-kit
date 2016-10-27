/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

// Actions
import * as UserActions from '../actions/user'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Button from './button'

// Screens
import StyleGuide from '../screens/style.guide'
import ListViewExample from '../screens/recipes/listing'
import Login from '../screens/auth/login'
import Tabs from '../screens/recipes/tabs'


/* Component ==================================================================== */
class Menu extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      menu: [
        {title: AppConfig.appName, component: Tabs},
        {title: 'Style Guide', component: StyleGuide},
      ],
    };
  }

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
  }

  /**
    * Logout
    */
  _logout = () => {
    if (this.props.logout) {
      this.props.logout()
        .then(() => {
          if (this.props.navigate) this.props.navigate('Login', Login);
        }).catch(() => {
          alert('Something went wrong.');
        });
    }
  }

  /**
    * RENDER
    */
  render = () => {
    let { navigate } = this.props;
    let { menu } = this.state;

    // Build the actual Menu Items
    let menuItems = [];
    menu.map((item)=>{
      let { title, component, props } = item;

      menuItems.push(
        <TouchableOpacity key={'menu-item-'+title}
          onPress={()=>navigate(title, component, props)}>
          <View style={[styles.menuItem]}>
            <Text style={[AppStyles.baseText, styles.menuItem_text]}>{title}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.container]}>
        <View style={[styles.backgroundFill]} />

        <View style={[styles.menuContainer]}>
          <View style={[styles.menu]}>{menuItems}</View>

          {this.props.user && this.props.user.email ?
            <View style={[styles.menuBottom]}>
              <Text style={[AppStyles.baseText, styles.menuBottom_text, AppStyles.centered]}>
                Logged in as:{"\n"}
                {this.props.user.email}
              </Text>

              <View style={[AppStyles.spacer_10]} />

              <View style={[AppStyles.paddingHorizontal]}>            
                <Button
                  text={'Log Out'}
                  type={'outlined'}
                  size={'small'}
                  color={'#fff'}
                  onPress={this._logout} />
              </View>
            </View>
          : null}
        </View>
      </View>
    );
  }
}


/* Styles ==================================================================== */
const MENU_BG_COLOR = "#4E5665";

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
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#5D677A",
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5)),
    fontWeight: '500',
    marginTop: 10,
    flex: 1,
    color: "#EEEFF0"
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
    color: "#EEEFF0"
  }
});

/* Export Component ==================================================================== */
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  user: state.user,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);