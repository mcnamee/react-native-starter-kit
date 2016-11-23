/**
 * Coming Soon
 *
    <ComingSoon text={"Hello World"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';

// App Globals
import AppStyles from '../utils/styles';

/* Component ==================================================================== */
class ComingSoon extends Component {
  static componentName = 'ComingSoon';

  static propTypes = {
    text: PropTypes.string,
  }

  render = () => {
    const text = this.props.text || 'Coming soon...';

    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ComingSoon;
