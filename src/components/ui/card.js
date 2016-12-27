/**
 * Buttons
 *
     <Button text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component } from 'react';
import { Card } from 'react-native-elements';

// App Globals
import AppConfig from '@constants/config';

/* Component ==================================================================== */
class CustomCard extends Component {
  cardProps = () => {
    // Defaults
    const props = {
      containerStyle: {
        borderRadius: AppConfig.theme.borderRadius,
      },
      ...this.props,
    };

    return props;
  }

  render = () => (
    <Card {...this.cardProps()} />
  )
}

/* Export Component ==================================================================== */
export default CustomCard;
