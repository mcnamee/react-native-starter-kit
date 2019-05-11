import React from 'react';
import { StatusBar, Platform, InteractionManager } from 'react-native';
import { Font } from 'expo';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

/**
 * Work around for recurring `Setting a timer for long time` warning.
 * (Issue is related to "Firebase" package)
 * see: https://github.com/firebase/firebase-js-sdk/issues/97
 */
if (Platform.OS === 'android') {
  const _setTimeout = global.setTimeout;
  const _clearTimeout = global.clearTimeout;
  const MAX_TIMER_DURATION_MS = 60 * 1000;

  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
      InteractionManager.runAfterInteractions(() => {
        if (!timerFix[id]) {
          return;
        }
        delete timerFix[id];
        fn(...args);
      });
      return;
    }

    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };

  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
      const ttl = Date.now() + time;
      const id = `_lt_${Object.keys(timerFix).length}`;
      runTask(id, fn, ttl, args);
      return id;
    }
    return _setTimeout(fn, time, ...args);
  };

  global.clearTimeout = (id) => {
    if (typeof id === 'string' && id.startWith('_lt_')) {
      _clearTimeout(timerFix[id]);
      delete timerFix[id];
      return;
    }
    _clearTimeout(id);
  };
}

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    persistor: PropTypes.shape({}).isRequired,
  }

  state = { loading: true }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store, persistor } = this.props;

    if (loading) return <Loading />;

    return (
      <Root>
        <Provider store={store}>
          <PersistGate
            loading={<Loading />}
            persistor={persistor}
          >
            <StyleProvider style={getTheme(theme)}>
              <Router>
                <Stack key="root">
                  {Routes}
                </Stack>
              </Router>
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
