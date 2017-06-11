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
import AuthForm from '@containers/auth/Form/FormContainer';

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
      component={AuthForm}
      formType={'login'}
      analyticsDesc={'AuthForm: Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
      clone
      component={AuthForm}
      formType={'signup'}
      analyticsDesc={'AuthForm: Sign Up'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'passwordReset'}
      title={'Password Reset'}
      clone
      component={AuthForm}
      formType={'passwordReset'}
      analyticsDesc={'AuthForm: Password Reset'}
    />
  </Scene>
);

export default scenes;
