/**
 * List Row
 *
    <ListRow 
      title={title}
      image={entry.entry_image}
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
import AppStyles from '../styles.ios'
import AppConfig from '../config.ios'


/* Component ==================================================================== */
class listRow extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
  }

  static defaultProps = {
    title: 'Lorem Ipsum',
  }

  /**
    * RENDER
    */
  render = () => {
    let { title, image, onPress } = this.props;

    if(image) {
      return (
        <TouchableOpacity 
          style={[styles.listRow, image && styles.imageBackground]} 
          onPress={onPress} activeOpacity={0.7}>
          <Image source={{uri: image}} style={[styles.imageBackground_image]}>
            <Text style={[AppStyles.baseText, styles.listRow_text, styles.listRowImage_text]}>{title.toUpperCase()}</Text>
          </Image>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={[styles.listRow]} onPress={onPress} activeOpacity={0.7}>
          <View style={styles.listRowInner}>
            <Text style={[AppStyles.baseText, styles.listRow_text]}>{title.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  listRow: {
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
  },
  listRowInner: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
  },
  listRow_text: {
    color: AppConfig.textColor,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  listRowImage_text: {
    color: "#FFF",
  },

  // With Image
  imageBackground: {
    backgroundColor: "#333",
  },
  imageBackground_image: {
    height: AppConfig.windowHeight / 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  }
});

/* Export Component ==================================================================== */
  module.exports = listRow;
  module.exports.details = {
    title: 'listRow'
  };