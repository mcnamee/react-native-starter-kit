/**
 * Buttons
 *
     <Button text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';

// Consts and Libs
import { AppColors, AppFonts, AppSizes } from '@theme/';

/* Component ==================================================================== */
class CustomButton extends Component {
  static propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool,
    outlined: PropTypes.bool,
    backgroundColor: PropTypes.string,
    icon: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    small: false,
    large: false,
    outlined: false,
    icon: {},
  }

  buttonProps = () => {
    // Defaults
    const props = {
      title: 'Coming Soon...',
      onPress: () => Alert.alert('Coming soon...'),
      backgroundColor: AppColors.brand.primary,
      color: '#fff',
      fontWeight: 'bold',
      fontFamily: AppFonts.base.family,
      fontSize: AppFonts.base.size,
      borderRadius: AppSizes.borderRadius,
      raised: true,
      buttonStyle: {
        padding: 12,
        marginLeft: 0,
        marginRight: 0,
      },
      ...this.props,
      small: false,
      large: false,
      icon: (this.props.icon && this.props.icon.name)
        ? {
          ...this.props.icon,
          size: 14,
        } : null,
    };

    // Overrides
    // Size
    if (this.props.small) {
      props.fontSize = 12;
      props.buttonStyle.padding = 8;

      if (props.icon && props.icon.name) {
        props.icon = {
          ...props.icon,
          size: 14,
        };
      }
    }
    if (this.props.large) {
      props.fontSize = 20;
      props.buttonStyle.padding = 15;

      if (props.icon && props.icon.name) {
        props.icon = {
          ...props.icon,
          size: 20,
        };
      }
    }

    // Outlined
    if (this.props.outlined) {
      props.raised = false;
      props.backgroundColor = this.props.backgroundColor || 'transparent';
      props.color = AppColors.brand.primary;
      props.buttonStyle.borderWidth = 1;
      props.buttonStyle.borderColor = AppColors.brand.primary;

      if (props.icon && props.icon.name) {
        props.icon = {
          ...props.icon,
          color: AppColors.brand.primary,
        };
      }
    }

    return props;
  }

  render = () => (
    <Button
      {...this.buttonProps()}
    />
  )
}

/* Export Component ==================================================================== */
export default CustomButton;
