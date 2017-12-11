import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import HomeContainer from '../../containers/Home';
import HomeComponent from '../components/Home';

import RecipesContainer from '../../containers/Recipes';
import RecipesComponent from '../components/Recipes';
import RecipeViewComponent from '../components/Recipe';

import NotFound from '../components/404';
import About from '../components/About';

const Index = () => (
  <Switch>
    <Route exact path="/" render={routeProps => <HomeContainer {...routeProps} Layout={HomeComponent} />} />
    <Route path="/recipes" render={routeProps => <RecipesContainer {...routeProps} Layout={RecipesComponent} />} />
    <Route path="/recipe/:id" render={routeProps => <RecipesContainer {...routeProps} Layout={RecipeViewComponent} />} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
);

export default Index;
