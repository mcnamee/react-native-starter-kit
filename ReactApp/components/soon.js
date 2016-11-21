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

import {
  Button,
} from 'react-native-elements';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

/* Component ==================================================================== */
class ComingSoon extends Component {
  static componentName = 'ComingSoon';

  static propTypes = {
    navigator: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    text: PropTypes.string,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle,
      component: ComingSoon,
      index: 2,
    });
  }

  render = () => {
    const text = this.props.text || 'Coming soon...';

    return (
      <View style={[AppStyles.container, AppStyles.containerCentered]}>
        <Text style={[AppStyles.baseText, AppStyles.p]}>
          {text}
        </Text>

        <View style={[AppStyles.spacer_10]} />

        <Button
          {...AppConfig.buttonDefaults}
          title={'Tap to test the back button'}
          onPress={() => this.navigate(text)}
        />
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default ComingSoon;
