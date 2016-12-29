/**
 * App Navigation
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppColors, AppStyles } from '@theme/';

// Components
import Drawer from '@containers/ui/drawer';
import TabIcon from '@components/ui/tab.icon';
import { NavbarMenuButton } from '@containers/ui/navbar.buttons';

// Scenes
import SplashScreen from '@containers/splash';
import StyleGuide from '@containers/style.guide';
import ComingSoon from '@components/general/soon';
import Authenticate from '@components/auth/authenticate';
import AuthWebView from '@components/auth/webview';
import AuthLogin from '@containers/login';
import Recipes from '@containers/recipes/browse';
import RecipeView from '@components/recipes/view';

const navBarProps = {
  hideNavBar: false,
  titleStyle: AppStyles.navbarTitle,
  navigationBarStyle: AppStyles.navbar,
  leftButtonIconStyle: AppStyles.navbarButton,
  rightButtonIconStyle: AppStyles.navbarButton,
  sceneStyle: {
    backgroundColor: AppColors.background,
    paddingTop: 60,
  },
};

const navBarPropsTabs = {
  ...navBarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    backgroundColor: AppColors.background,
    paddingTop: 60,
    paddingBottom: 50,
  },
};

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...navBarProps}>
    <Scene key="splash" component={SplashScreen} hideNavBar />

    {/* Auth */}
    <Scene key={'authenticate'} hideNavBar component={Authenticate} type={ActionConst.RESET} />
    <Scene {...navBarProps} key={'login'} title={'Login'} component={AuthLogin} />
    <Scene {...navBarProps} key={'signUp'} title={'Sign Up'} component={AuthWebView} url={AppConfig.urls.signUp} />
    <Scene {...navBarProps} key={'passwordReset'} title={'Password Reset'} component={AuthWebView} url={AppConfig.urls.resetPassword} />

    {/* Main App */}
    <Scene key={'app'} {...navBarProps} title={AppConfig.appName} hideNavBar={false} type={ActionConst.RESET}>
      {/* Drawer Side Menu */}
      <Scene key={'home'} component={Drawer}>
        {/* Tabbar */}
        <Scene key={'tabBar'} tabs tabBarStyle={AppStyles.tabbar} pressOpacity={0.8}>
          <Scene
            {...navBarPropsTabs}
            key={'recipes'}
            title={'Recipes'}
            icon={props => TabIcon({ ...props, icon: 'search' })}
          >
            <Scene
              {...navBarPropsTabs}
              key={'recipesListing'}
              component={Recipes}
              title={AppConfig.appName}
            />
            <Scene
              {...navBarProps}
              key={'recipeView'}
              component={RecipeView}
              getTitle={props => ((props.title) ? props.title : 'View Recipe')}
            />
          </Scene>

          <Scene
            key={'timeline'}
            {...navBarPropsTabs}
            title={'Coming Soon'}
            component={ComingSoon}
            icon={props => TabIcon({ ...props, icon: 'timeline' })}
          />

          <Scene
            key={'styleGuide'}
            {...navBarPropsTabs}
            title={'Style Guide'}
            component={StyleGuide}
            icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
          />
        </Scene>
      </Scene>

      {/* General */}
      <Scene key={'comingSoon'} title={'Coming Soon'} component={ComingSoon} />
    </Scene>
  </Scene>,
);
