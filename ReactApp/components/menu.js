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

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Screens
import Index from '../screens/tabbar'
import StyleGuide from '../screens/style.guide'
import ComingSoon from '../screens/soon'
import FormExample from '../screens/forms'
import ListViewExample from '../screens/listview'


/* Component ==================================================================== */
class Menu extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      menu: [
        {title: 'Tab Bar', component: Index},
        {title: 'Style Guide', component: StyleGuide},
        {title: 'Forms', component: FormExample},
        {title: 'List Example', component: ListViewExample, props: {noImages: true}},
        {title: 'List Example 2', component: ListViewExample},
      ],
    };
  }

  static propTypes = {
    navigate: React.PropTypes.func.isRequired,
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
      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>{menuItems}</View>
      </View>
    );
  }
}


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: "#111111",
  },
  menu: {
    flex: 1,
    left: 0,
    right: 0,
    height: AppConfig.windowHeight,
    backgroundColor: "#111111",
    padding: 20,
    paddingTop: AppConfig.statusBarHeight,
  },
  menuItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 18,
    lineHeight: 18 + (18 * 0.4),
    fontWeight: '500',
    paddingTop: 10,
    flex: 1,
    color: "#EEE"
  },
});

/* Export Component ==================================================================== */
export default Menu