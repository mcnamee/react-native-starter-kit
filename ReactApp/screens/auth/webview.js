/**
 * Auth WebView - used by sign up and password reset
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';

// Screens
import WebView from '../webview';

let timeout;

/* Component ==================================================================== */
class AuthWebView extends Component {
  static componentName = 'AuthWebView';

  static propTypes = {
    navigator: PropTypes.shape({
      pop: PropTypes.func.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }

  componentWillUnmount = () => {
    // Clear the timeout, otherwise we'll get warnings
    // when the user unmounts mid-way timeout
    clearTimeout(timeout);
  }

  /**
    * Pop back a scene when URL changes
    * + for when the action is completed
    * + restricting people from freely browsing
    */
  urlChanged = (newUrl) => {
    if (newUrl !== this.props.url) {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.props.navigator.pop();
      }, 2000);
    }
  }

  render = () => (
    <WebView
      onNavigationStateChange={this.urlChanged}
      url={this.props.url}
    />
  )
}

/* Export Component ==================================================================== */
export default AuthWebView;
