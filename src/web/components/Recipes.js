import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const RecipeListing = ({ recipes }) => {
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
   * Build Cards for Listing
   */
  const cards = recipes.recipes.map(item => (
    <Card key={`${item.id}`}>
      <CardImg top src={item.image} alt={item.title} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.body}</CardText>
        <Link className="btn btn-primary" to={`/recipe/${item.id}`}>View Recipe</Link>
      </CardBody>
    </Card>
  ));

  /**
   * Show Listing
   */
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>Let{"'"}s Read Data from Firebase</h1>
        </Col>
      </Row>
      <Row className={recipes.loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

RecipeListing.propTypes = {
  recipes: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};

export default RecipeListing;
