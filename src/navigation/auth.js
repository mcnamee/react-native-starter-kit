/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Authenticate from '@containers/auth/AuthenticateView';
import AuthLogin from '@containers/auth/Login/LoginContainer';
import AuthSignUp from '@containers/auth/SignUp/SignUpContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      hideNavBar
      key={'authLanding'}
      component={Authenticate}
      type={ActionConst.RESET}
      analyticsDesc={'Authenticate: Authentication'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'Login'}
      clone
      component={AuthLogin}
      analyticsDesc={'AuthLogin: Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
      clone
      component={AuthSignUp}
      analyticsDesc={'AuthSignUp: Sign Up'}
    />
  </Scene>
);

export default scenes;
