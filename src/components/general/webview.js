/**
 * Web View
 *
 * <WebView url={"http://google.com"} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  WebView,
  StyleSheet,
  InteractionManager,
} from 'react-native';

// App Globals
import AppStyles from '@constants/styles';
import AppConfig from '@constants/config';

// Components
import Loading from '@components/general/loading';
import Error from '@components/general/error';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppConfig.theme.backgroundColor,
  },
});

/* Component ==================================================================== */
class AppWebView extends Component {
  static componentName = 'AppWebView';

  static propTypes = {
    url: PropTypes.string.isRequired,
    onNavigationStateChange: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      webViewURL: null,
    };
  }

  componentDidMount = () => {
    // Wait until interaction has finished before loading the webview in
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        loading: false,
        webViewURL: this.props.url || null,
      });
    });
  }

  /**
    * Each time page loads, update the URL
    */
  onNavigationStateChange = (navState) => {
    this.state.webViewURL = navState.url;
    if (this.props.onNavigationStateChange) this.props.onNavigationStateChange(navState.url);
  }

  render = () => {
    const { webViewURL, loading } = this.state;

    if (loading) return (<Loading />);
    if (!webViewURL) return (<Error type={'URL not defined.'} />);

    return (
      <WebView
        scalesPageToFit
        startInLoadingState
        source={{ uri: webViewURL }}
        automaticallyAdjustContentInsets={false}
        style={[AppStyles.container, styles.container]}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default AppWebView;
