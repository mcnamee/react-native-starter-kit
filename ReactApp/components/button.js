/**
 * Button
 *
    <Button 
      text={text}
      type={'outlined'}
      size={'medium'}
      disabled={false}
      onPress={()=>{alert('Go To Entry View')}} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react'
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
class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['', 'outlined']),
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    onPress: () => {}, // Do nothing
    type: '',
    color: '',
    text: 'Click Here',
    size: 'medium',
    disabled: false,
  }

  /**
    * RENDER
    */
  render = ()=> {
    let { text, type, onPress, size, disabled, color } = this.props;

    // Setup styles based on Props
    let buttonStyles = [styles.button];
    let textStyles = [AppStyles.baseText, styles.button_text];

    if (type == 'outlined') {
      buttonStyles.push(styles.buttonOutline);
      textStyles.push(styles.buttonOutline_text);
    }
    if (size == 'small') {
      buttonStyles.push(styles.buttonSml);
    }
    if (size == 'large') {
      buttonStyles.push(styles.buttonLrg);
    }
    if (disabled) buttonStyles.push(styles.disabled);
    if (color != '') {
      if (type == 'outlined') {
        buttonStyles.push({ borderColor: color });
        textStyles.push({ color: color });
      } else {
        buttonStyles.push({ backgroundColor: color });
      }
    }
    if (size == 'small') {
      textStyles.push(styles.buttonSml_text);
    }
    if (size == 'large') {
      textStyles.push(styles.buttonLrg_text);
    }

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={disabled}
        style={ buttonStyles }>
        <Text style={ textStyles }>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Standard
  button: {
    backgroundColor: AppConfig.primaryColor,
    height: 50,
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button_text: {
    color: "#FFF",
    textAlign: 'center',
    fontSize: 15,
    lineHeight: parseInt(15 + (15 * 0.5)),
    fontFamily: AppConfig.baseFont,
    fontWeight: '800',
  },

  // Outlined
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: AppConfig.primaryColor,
  },
  buttonOutline_text: {
    color: AppConfig.primaryColor,
  },

  // Large
  buttonLrg: {
    height: 65,
  },
  buttonLrg_text: {
    fontSize: 18,
    lineHeight: parseInt(18 + (18 * 0.5)),
  },

  // Small
  buttonSml: {
    height: 35,
  },
  buttonSml_text: {
    fontSize: 12,
    lineHeight: parseInt(12 + (12 * 0.5)),
  },

  // Disabled
  disabled: {
    opacity: 25,
  },
});

/* Export Component ==================================================================== */
export default Button