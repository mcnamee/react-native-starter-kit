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
import LoginForm from '@containers/auth/Forms/LoginContainer';
import SignUpForm from '@containers/auth/Forms/SignUpContainer';
import ResetPasswordForm from '@containers/auth/Forms/ResetPasswordContainer';

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
      component={LoginForm}
      analyticsDesc={'LoginForm: Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
      clone
      component={SignUpForm}
      analyticsDesc={'SignUpForm: Sign Up'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'passwordReset'}
      title={'Password Reset'}
      clone
      component={ResetPasswordForm}
      analyticsDesc={'ResetPasswordForm: Password Reset'}
    />
  </Scene>
);

export default scenes;
