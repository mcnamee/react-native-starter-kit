/**
 * Auth WebView
 *  - Used by sign up and password reset
 *  - Shows the WebViews and pops when finished
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';

// Components
import WebView from '@components/general/webview';

let timeout;

/* Component ==================================================================== */
class AuthWebView extends Component {
  static componentName = 'AuthWebView';

  static propTypes = {
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
        Actions.pop();
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
