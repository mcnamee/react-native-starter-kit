import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from '../components/Home';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import Error from '../components/Error';

const Index = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/sign-up" render={routeProps => <SignUpContainer {...routeProps} Layout={SignUpComponent} />} />
    <Route path="/login" render={routeProps => <LoginContainer {...routeProps} Layout={LoginComponent} />} />
    <Route path="/recipes" render={routeProps => <RecipesContainer {...routeProps} Layout={RecipesComponent} />} />
    <Route path="/recipe/:id" render={routeProps => <RecipesContainer {...routeProps} Layout={RecipeViewComponent} />} />
    <Route render={routeProps => <Error {...routeProps} title="404" content="Sorry, the route you requested does not exist" />} />
  </Switch>
);

export default Index;
