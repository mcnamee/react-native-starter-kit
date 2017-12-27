import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import AppContainer from '../../containers/App';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="recipes"
          title="Recipes"
          icon={() => <Icon name="layers" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="recipes" component={RecipesContainer} Layout={RecipesComponent} />
        </Stack>

        <Stack
          key="tab_2"
          title="Tab #2"
          icon={() => <Icon name="plus" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

        <Stack
          key="profile"
          title="Profile"
          icon={() => <Icon name="user" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={AppContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="Sign Up"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="Login"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="Forgot Password"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="Update Profile"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="recipe"
      title="Recipe"
      {...DefaultProps.navbarProps}
      component={RecipesContainer}
      Layout={RecipeViewComponent}
    />

    <Scene
      key="about"
      title="About Us"
      component={AboutComponent}
      {...DefaultProps.navbarProps}
    />
  </Stack>
);

export default Index;
