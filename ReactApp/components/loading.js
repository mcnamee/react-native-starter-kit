/**
 * Loading Screen
 *
     <Loading text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react'
import {
  View,
  ActivityIndicator,
  Text
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

/* Component ==================================================================== */
class Loading extends Component {
  static propTypes = {
    text: PropTypes.string,
    transparent: PropTypes.bool,
  }

  render = () => {
    let { text, transparent } = this.props;

    let colorOfSpinner = "#AAA";
    if (transparent) colorOfSpinner = "#000";

    return (
      <View style={[AppStyles.container, AppStyles.containerCentered, transparent && {backgroundColor: 'rgba(255,255,255,0.75)'} ]}>
        <ActivityIndicator animating={true} size="large"
          color={colorOfSpinner} />

        <View style={[AppStyles.spacer_10]} />

        {text &&
          <Text style={[AppStyles.baseText]}>
            {text}
          </Text>
        }
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default Loading
