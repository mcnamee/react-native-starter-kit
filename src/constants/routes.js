/**
 * App Routes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// App Globals
import AppConfig from '@constants/config';

// Components
import Drawer from '@containers/drawer';

// Routes
import SplashScreen from '@containers/splash';
import Home from '@components/home';
import StyleGuide from '@components/style.guide';
import ComingSoon from '@components/general/soon';

// Auth
import Authenticate from '@components/auth/authenticate';
import AuthWebView from '@components/auth/webview';
import AuthLogin from '@containers/login';

// Recipes
import RecipeView from '@components/recipes/view';

export default Actions.create(
  <Scene key="drawer" component={Drawer}>
    <Scene
      key={'root'}
      default={'splash'}
      navigationBarStyle={AppConfig.theme.navbar}
      titleStyle={AppConfig.theme.navbarTitle}
      leftButtonIconStyle={AppConfig.theme.navbarButton}
      rightButtonIconStyle={AppConfig.theme.navbarButton}
      sceneStyle={{ paddingTop: 64 }}
    >
      <Scene key="splash" component={SplashScreen} title="Splash" hideNavBar />
      <Scene key="home" component={Home} title={AppConfig.appName} type={ActionConst.REPLACE} />

      {/* General */}
      <Scene key="styleGuide" component={StyleGuide} title={'Style Guide'} />
      <Scene key="comingSoon" component={ComingSoon} title={'Coming Soon'} />

      {/* Auth */}
      <Scene key="authenticate" title={'Authenticate'} hideNavBar component={Authenticate} />
      <Scene key="login" title={'Login'} component={AuthLogin} />
      <Scene key="signUp" title={'Sign Up'} component={AuthWebView} url={AppConfig.urls.signUp} />
      <Scene key="passwordReset" title={'Password Reset'} component={AuthWebView} url={AppConfig.urls.resetPassword} />

      {/* Recipes */}
      <Scene key="recipeView" component={RecipeView} getTitle={props => ((props.title) ? props.title : 'View Recipe')} />
    </Scene>
  </Scene>,
);
