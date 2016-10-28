/**
 * Auth WebView - used by sign up and password reset
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
} from 'react-native'

// App Globals
import AppConfig from '../../config'

// Screens
import WebView from '../webview'

let timeout;

/* Component ==================================================================== */
class AuthWebView extends Component {
  static componentName = 'AuthWebView';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    url: React.PropTypes.string.isRequired,
  }

  /**
    * Clear the timeout, otherwise we'll get warnings
    * when the user unmounts mid-way timeout
    */
  componentWillUnmount = () => {
    clearTimeout(timeout);
  }

  /**
    * Pop back a scene when URL changes
    * + for when the action is completed
    * + restricting people from freely browsing
    */
  _urlChanged = (newUrl) => {
    if (newUrl != this.props.url) {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.props.navigator.pop();
      }, 2000);
    }
  }

  /**
    * RENDER
    */
  render = () => {
    return (
      <WebView 
        onNavigationStateChange={this._urlChanged}
      	url={this.props.url} />
    );
  }
}

/* Export Component ==================================================================== */
export default AuthWebView