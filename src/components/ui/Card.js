/**
 * Buttons
 *
     <Button text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import { Card } from 'react-native-elements';

// Consts and Libs
import { AppSizes } from '@theme/';

/* Component ==================================================================== */
class CustomCard extends Component {
  cardProps = () => {
    // Defaults
    const props = {
      containerStyle: {
        borderRadius: AppSizes.borderRadius,
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
