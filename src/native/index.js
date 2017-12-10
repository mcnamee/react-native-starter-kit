import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Drawer, Stack } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import Routes from './routes/index';

import Menu from './components/Menu';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={Menu}
          drawerWidth={300}
          drawerIcon={() => <Icon name="menu" type="simple-line-icon" color="#fff" />}
        >
          {Routes}
        </Drawer>
      </Stack>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
