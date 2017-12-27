import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Drawer, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Icon } from 'native-base';

import Routes from './routes/index';

import Menu from './components/Menu';
import Loading from './components/Loading';

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <Router>
        <Stack key="root">
          <Drawer
            hideNavBar
            key="drawer"
            contentComponent={Menu}
            drawerWidth={300}
            drawerIcon={() => <Icon name="menu" type="simple-line-icon" color="black" />}
          >
            {Routes}
          </Drawer>
        </Stack>
      </Router>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
