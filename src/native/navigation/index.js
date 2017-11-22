import React, { Component } from 'react';
import { Scene, Router, Tabs, Drawer, Stack } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { Colors } from '@constants/';

import Home from '../containers/Home';
import Menu from '../components/Menu';

const navbarProps = {
  navigationBarStyle: { backgroundColor: Colors.brand.primary },
  titleStyle: { color: 'white', alignSelf: 'center' },
};

const tabProps = {
  activeBackgroundColor: 'transparent',
  inactiveBackgroundColor: '#fff',
};

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Stack key={'root'}>
          <Drawer
            hideNavBar
            key={'drawer'}
            contentComponent={Menu}
            drawerWidth={300}
            drawerIcon={() => <Icon name={'menu'} type={'simple-line-icon'} color={'#fff'} />}
          >
            <Scene hideNavBar>
              <Tabs
                key={'tabbar'}
                swipeEnabled
                showLabel={true}
                {...tabProps}
              >
                <Stack
                  key={'tab_1'}
                  title={'Tab #1'}
                  tabBarLabel={'TAB #1'}
                  icon={() => <Icon name={'directions'} type={'simple-line-icon'} color={Colors.brand.primary} />}
                  {...navbarProps}
                >
                  <Scene key={'home'} component={Home}/>
                </Stack>
                <Stack
                  key={'tab_2'}
                  title={'Tab #2'}
                  tabBarLabel={'TAB #2'}
                  icon={() => <Icon name={'plus'} type={'simple-line-icon'} color={Colors.brand.primary} />}
                  {...navbarProps}
                >
                  <Scene key={'home'} component={Home}/>
                </Stack>
                <Stack
                  key={'tab_3'}
                  title={'Tab #3'}
                  tabBarLabel={'TAB #3'}
                  icon={() => <Icon name={'layers'} type={'simple-line-icon'} color={Colors.brand.primary} />}
                  {...navbarProps}
                >
                  <Scene key={'home'} component={Home}/>
                </Stack>
              </Tabs>
            </Scene>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
