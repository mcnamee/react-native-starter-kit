/**
 * App Routes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// App Globals
import AppConfig from '@config/';

// Routes
import SplashScreen from '@containers/splash';
import Home from '@components/home';
import Authenticate from '@components/auth/authenticate';

export default Actions.create(
  <Scene
    key="root"
    default="SplashScreen"
    navigationBarStyle={AppConfig.theme.navbar}
    titleStyle={AppConfig.theme.navbarTitle}
  >
    <Scene key="splash" component={SplashScreen} title="Splash" />
    <Scene key="home" component={Home} title={AppConfig.appName} type={ActionConst.REPLACE} />
    <Scene key="authenticate" component={Authenticate} />
  </Scene>,
);
