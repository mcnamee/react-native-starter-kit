/**
 * Text
 *
     <Text h1>Hello World</Text>
 *
 * Whisky Journal
 * https://bitbucket.org/mcnamee/whisky-journal-app-v2/
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';

/* Component ==================================================================== */
class CustomText extends Component {
  static propTypes = {
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    p: PropTypes.bool,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    p: false,
    style: [],
    children: '',
  }

  textProps = () => {
    // Defaults
    const props = {
      ...this.props,
      style: [AppStyles.baseText],
    };

    if (this.props.p) props.style = [AppStyles.p];
    if (this.props.h1) props.style = [AppStyles.h1];
    if (this.props.h2) props.style = [AppStyles.h2];
    if (this.props.h3) props.style = [AppStyles.h3];
    if (this.props.h4) props.style = [AppStyles.h4];
    if (this.props.h5) props.style = [AppStyles.h5];

    if (this.props.style) {
      props.style = [
        ...props.style,
        ...this.props.style,
      ];
    }

    return props;
  }

  render = () => <Text {...this.textProps()}>{this.props.children}</Text>;
}

/* Export Component ==================================================================== */
export default CustomText;
