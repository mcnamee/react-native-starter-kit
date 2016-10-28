/**
 * Web View
 *
 * <WebView url={"http://google.com"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  View,
  WebView,
  StyleSheet,
  InteractionManager,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Screens
import Loading from '../components/loading'
import Error from '../components/error'

/* Component ==================================================================== */
class AppWebView extends Component {
  static componentName = 'AppWebView';

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      webViewURL: null,
    };
  }

  static propTypes = {
    url: React.PropTypes.string.isRequired,
    onNavigationStateChange: React.PropTypes.func,
  }

  /**
    * On Load
    */
  componentDidMount = () => {
    // Wait until interaction has finished before loading the webview in
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        loading: false,
        webViewURL: this.props.url || null
      });
    });
  }

  /**
    * Each time page loads, update the URL
    */
  _onNavigationStateChange = (navState) => {
    this.state.webViewURL = navState.url;

    if (this.props.onNavigationStateChange) this.props.onNavigationStateChange(navState.url);
  }

  /**
    * RENDER
    */
  render = () => {
    let { webViewURL, loading } = this.state;

    if (loading) return (<Loading />);
    if (!webViewURL) return (<Error type={'URL not defined.'} />);

    return (
      <WebView
        scalesPageToFit={true} 
        source={{uri: webViewURL}}
        startInLoadingState={true}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container]}
        onNavigationStateChange={this._onNavigationStateChange} />
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppConfig.backgroundColor,
  },
});

/* Export Component ==================================================================== */
export default AppWebView
