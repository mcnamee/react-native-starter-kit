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
import { AppColors, AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import Drawer from '@containers/ui/DrawerContainer';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import AppLaunch from '@containers/Launch/LaunchContainer';
import StyleGuide from '@containers/StyleGuideView';
import ComingSoon from '@components/general/Soon';
import Authenticate from '@containers/auth/AuthenticateView';
import AuthWebView from '@containers/auth/WebView';
import AuthLogin from '@containers/auth/Login/LoginContainer';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

const navBarProps = {
  hideNavBar: false,
  titleStyle: AppStyles.navbarTitle,
  navigationBarStyle: AppStyles.navbar,
  leftButtonIconStyle: AppStyles.navbarButton,
  rightButtonIconStyle: AppStyles.navbarButton,
  sceneStyle: {
    backgroundColor: AppColors.background,
    paddingTop: AppSizes.navbarHeight,
  },
};

const navBarPropsTabs = {
  ...navBarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    backgroundColor: AppColors.background,
    paddingTop: AppSizes.navbarHeight,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
export default Actions.create(
  <Scene key={'root'} {...navBarProps}>
    <Scene
      hideNavBar
      key={'splash'}
      component={AppLaunch}
      analyticsDesc={'AppLaunch: Launching App'}
    />

    {/* Auth */}
    <Scene
      hideNavBar
      key={'authenticate'}
      component={Authenticate}
      type={ActionConst.RESET}
      analyticsDesc={'Authenticate: Authentication'}
    />
    <Scene
      {...navBarProps}
      key={'login'}
      title={'Login'}
      component={AuthLogin}
      analyticsDesc={'AuthLogin: Login'}
    />
    <Scene
      {...navBarProps}
      key={'signUp'}
      title={'Sign Up'}
      component={AuthWebView}
      url={AppConfig.urls.signUp}
      analyticsDesc={'AuthWebView: Sign Up'}
    />

    <Scene
      {...navBarProps}
      key={'passwordReset'}
      title={'Password Reset'}
      component={AuthWebView}
      url={AppConfig.urls.resetPassword}
      analyticsDesc={'AuthWebView: Password Reset'}
    />

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
              analyticsDesc={'Recipes: Browse Recipes'}
            />
            <Scene
              {...navBarProps}
              key={'recipeView'}
              component={RecipeView}
              getTitle={props => ((props.title) ? props.title : 'View Recipe')}
              analyticsDesc={'RecipeView: View Recipe'}
            />
          </Scene>

          <Scene
            key={'timeline'}
            {...navBarPropsTabs}
            title={'Coming Soon'}
            component={ComingSoon}
            icon={props => TabIcon({ ...props, icon: 'timeline' })}
            analyticsDesc={'ComingSoon: Coming Soon'}
          />

          <Scene
            key={'styleGuide'}
            {...navBarPropsTabs}
            title={'Style Guide'}
            component={StyleGuide}
            icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
            analyticsDesc={'StyleGuide: Style Guide'}
          />
        </Scene>
      </Scene>

      {/* General */}
      <Scene
        key={'comingSoon'}
        title={'Coming Soon'}
        component={ComingSoon}
        analyticsDesc={'ComingSoon: Coming Soon'}
      />
    </Scene>
  </Scene>,
);
