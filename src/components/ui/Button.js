/**
 * Buttons
 *
     <Button text={'Server is down'} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
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
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    small: false,
    large: false,
    outlined: false,
    icon: {},
    backgroundColor: null,
  }

  buttonProps = () => {
    // Defaults
    const props = {
      title: 'Coming Soon...',
      color: '#fff',
      fontWeight: 'bold',
      onPress: this.props.onPress,
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
      backgroundColor: this.props.backgroundColor || AppColors.brand.primary,
      small: false,
      large: false,
      icon: (this.props.icon && this.props.icon.name)
        ? {
          size: 14,
          ...this.props.icon,
        } : null,
    };

    // Overrides
    // Size
    if (this.props.small) {
      props.fontSize = 12;
      props.buttonStyle.padding = 8;

      if (props.icon && props.icon.name) {
        props.icon = {
          size: 14,
          ...props.icon,
        };
      }
    }
    if (this.props.large) {
      props.fontSize = 20;
      props.buttonStyle.padding = 15;

      if (props.icon && props.icon.name) {
        props.icon = {
          size: 20,
          ...props.icon,
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
          color: AppColors.brand.primary,
          ...props.icon,
        };
      }
    }

    return props;
  }

  render = () => <Button {...this.buttonProps()} />;
}

/* Export Component ==================================================================== */
export default CustomButton;
