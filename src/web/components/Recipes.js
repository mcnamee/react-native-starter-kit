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
import Error from './Error';

const RecipeListing = ({ error, loading, recipes }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = recipes.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/recipe/${item.id}`}>
        <CardImg top src={item.image} alt={item.title} />
      </Link>
      <CardBody>
        <CardTitle>
          {item.title}
        </CardTitle>
        <CardText>
          {item.body}
        </CardText>
        <Link className="btn btn-primary" to={`/recipe/${item.id}`}>
          View Recipe
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            Recipes
          </h1>
          <p>
            The following data is read directly from Firebase.
          </p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

RecipeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeListing.defaultProps = {
  error: null,
};

export default RecipeListing;
