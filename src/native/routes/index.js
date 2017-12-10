import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import DefaultProps from '../constants/navigation';

import HomeContainer from '../../containers/Home';
import HomeComponent from '../components/Home';

import AboutComponent from '../components/About';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        showLabel
        {...DefaultProps.tabProps}
      >
        <Stack
          key="tab_1"
          title="Tab #1"
          tabBarLabel="TAB #1"
          icon={() => <Icon name="directions" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={HomeContainer} Layout={HomeComponent} />
        </Stack>

        <Stack
          key="tab_2"
          title="Tab #2"
          tabBarLabel="TAB #2"
          icon={() => <Icon name="plus" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

        <Stack
          key="tab_3"
          title="Tab #3"
          tabBarLabel="TAB #3"
          icon={() => <Icon name="layers" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={HomeContainer} Layout={HomeComponent} />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      key="about"
      title="About Us"
      component={AboutComponent}
      {...DefaultProps.navbarProps}
    />
  </Stack>
);

export default Index;
