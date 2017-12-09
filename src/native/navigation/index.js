import React from 'react';
import { Router, Drawer, Stack } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

// Other routes
import RoutesTabs from './tabs';

// Components
import Menu from '../components/Menu';

const Index = () => (
  <Router>
    <Stack key="root">
      <Drawer
        hideNavBar
        key="drawer"
        contentComponent={Menu}
        drawerWidth={300}
        drawerIcon={() => <Icon name="menu" type="simple-line-icon" color="#fff" />}
      >
        {RoutesTabs}
      </Drawer>
    </Stack>
  </Router>
);

export default Index;
