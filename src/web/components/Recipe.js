import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

const RecipeView = ({ recipes, recipeId }) => {
  /**
   * Show Error
   */
  if (recipes.error) {
    return (
      <Row>
        <Col sm="12">
          <h1>Error...</h1>
          <p><code>{recipes.error}</code></p>
        </Col>
      </Row>
    );
  }

  /**
   * Get Recipe
   */
  let recipe = null;
  if (recipeId && recipes.recipes) {
    recipe = recipes.recipes.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  if (!recipe) return <Redirect to={{ pathname: '/404' }} />;

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>{recipe.title}</h1>
          <p>by {recipe.author}</p>
        </Col>
      </Row>
      <Row className={recipes.loading ? 'content-loading' : ''}>
        <Col sm="4">
          <Card>
            <CardBody>
              <CardTitle>About this recipe</CardTitle>
              <CardText>{recipe.body}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle>Ingredients</CardTitle>
              <CardText>{recipe.ingredients}</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardBody>
              <CardTitle>Method</CardTitle>
              <CardText>{recipe.method}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

RecipeView.propTypes = {
  recipes: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default RecipeView;
