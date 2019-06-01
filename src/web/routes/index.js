import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import TemplateNothing from '../components/Templates/Nothing';
import TemplateSidebar from '../components/Templates/Sidebar';

// Routes
import Home from '../components/Home';
import HomeScreen from '../components/HomeScreen';

import RecipesContainer from '../../containers/Recipes';
import RecipeListingComponent from '../components/Recipe/Listing';
import RecipeSingleComponent from '../components/Recipe/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <TemplateSidebar>
          <Home {...props} />
        </TemplateSidebar>
      )}
    />
    <Route path="/home" render={props => <HomeScreen {...props} />} />
    <Route
      path="/sign-up"
      render={props => (
        <TemplateNothing pageTitle="Sign Up">
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/login"
      render={props => (
        <TemplateNothing pageTitle="Login">
          <LoginContainer {...props} Layout={LoginComponent} />
        </TemplateNothing>
      )}
    />
    <Route
      path="/forgot-password"
      render={props => (
        <TemplateNothing pageTitle="Forgot Password">
          <ForgotPasswordContainer
            {...props}
            Layout={ForgotPasswordComponent}
          />
        </TemplateNothing>
      )}
    />
    <Route
      path="/update-profile"
      render={props => (
        <TemplateSidebar pageTitle="Update Profile">
          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipes"
      render={props => (
        <TemplateSidebar pageTitle="Recipes">
          <RecipesContainer {...props} Layout={RecipeListingComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      path="/recipe/:id"
      render={props => (
        <TemplateSidebar pageTitle="Recipe View">
          <RecipesContainer {...props} Layout={RecipeSingleComponent} />
        </TemplateSidebar>
      )}
    />
    <Route
      render={props => (
        <TemplateSidebar pageTitle="404 - Page not found">
          <Error
            {...props}
            title="404"
            content="Sorry, the route you requested does not exist"
          />
        </TemplateSidebar>
      )}
    />
  </Switch>
);

export default Index;
