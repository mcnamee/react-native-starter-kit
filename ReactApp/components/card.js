/**
 * Card
 *
    <Card 
      title={title}
      onPress={()=>{alert('Go To Entry View')}} />
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
  Image,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

/* Component ==================================================================== */
class Card extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
  }

  /**
    * RENDER
    */
  render = () => {
    let { title, onPress } = this.props;

    return (
      <TouchableOpacity style={[styles.card]} onPress={onPress} activeOpacity={onPress ? 0.7 : 1}>
        <View style={[AppStyles.paddingTopSml, AppStyles.paddingLeftSml, AppStyles.paddingRightSml]}>
          <View style={styles.cardInner}>
            <View style={[AppStyles.paddingSml]}>
              {this.props.children}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  card: {
    left: 0,
    right: 0,
  },
  cardInner: {
    flex: 1,
    position: 'relative',
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
    borderRightWidth: 1,
    borderRightColor: AppConfig.borderColor,
    borderRadius: 5,
  },
});

/* Export Component ==================================================================== */
export default Card