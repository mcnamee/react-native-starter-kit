/**
 * Error Screen
 *
    <Error text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import { 
  View, 
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

/* Component ==================================================================== */
class Error extends Component {
  render = () => {
    // What are we Erroring?
    var text = this.props.text || 'Woops, Something wen\'t wrong.';

    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />

        <View style={[AppStyles.spacer_10]} />

        <Text style={[AppStyles.baseText]}>{text}</Text>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default Error