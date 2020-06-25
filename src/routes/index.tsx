import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import Home from '../containers/Home';
import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.productName}
          icon={() => <Icon name="home" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={Home} />
        </Stack>

        <Stack
          key="articlesList"
          title="Articles List"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} />
        </Stack>

        <Stack
          key="form"
          title="Articles Form"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
