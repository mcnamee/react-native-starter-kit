/**
 * App Routes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

// App Globals
import AppConfig from '@constants/config';

// Components
import Drawer from '@containers/drawer';
import { NavbarMenu } from '@components/ui/navbar.buttons';

// Routes
import SplashScreen from '@containers/splash';
import StyleGuide from '@components/style.guide';
import ComingSoon from '@components/general/soon';

// Auth
import Authenticate from '@components/auth/authenticate';
import AuthWebView from '@components/auth/webview';
import AuthLogin from '@containers/login';

// Recipes
import Recipes from '@containers/recipes/browse';
import RecipeView from '@components/recipes/view';

const navBarProps = {
  hideNavBar: false,
  titleStyle: AppConfig.theme.navbarTitle,
  navigationBarStyle: AppConfig.theme.navbar,
  leftButtonIconStyle: AppConfig.theme.navbarButton,
  rightButtonIconStyle: AppConfig.theme.navbarButton,
  sceneStyle: {
    backgroundColor: AppConfig.theme.backgroundColor,
    paddingTop: 60,
  },
};

const navBarPropsTabs = {
  ...navBarProps,
  renderLeftButton: () => <NavbarMenu />,
  sceneStyle: {
    backgroundColor: AppConfig.theme.backgroundColor,
    paddingTop: 60,
    paddingBottom: 50,
  },
};

/* Components ==================================================================== */
const TabIcon = ({ icon, selected }) => (
  <Icon
    name={icon}
    size={26}
    color={selected ? AppConfig.theme.tabbarIcon.selected : AppConfig.theme.tabbarIcon.default }
  />
);
TabIcon.propTypes = { icon: PropTypes.string.isRequired, selected: PropTypes.bool };
TabIcon.defaultProps = { icon: 'search', selected: false };

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
        <Scene key={'tabBar'} tabs={true} tabBarStyle={AppConfig.theme.tabbar} pressOpacity={0.8}>
          <Scene
            {...navBarPropsTabs}
            key={'recipes'}
            title={'Recipes'}
            icon={(props) => TabIcon({...props, icon: 'search'})}
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
            icon={(props) => TabIcon({...props, icon: 'timeline'})}
          />

          <Scene
            key={'styleGuide'}
            {...navBarPropsTabs}
            title={'Style Guide'}
            component={StyleGuide}
            icon={(props) => TabIcon({...props, icon: 'speaker-notes'})}
          />
        </Scene>
      </Scene>

      {/* General */}
      <Scene key={'comingSoon'} title={'Coming Soon'} component={ComingSoon} />
    </Scene>
  </Scene>,
);
