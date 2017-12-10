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
  const cards = recipes.map(item => (
    <Col sm="3">
      <Card>
        <CardImg top width="100%" src={item.image} alt={item.title} />
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardText>{item.body}</CardText>
          <Link className="btn btn-primary" to="/recipe/{item.id}">View Recipe</Link>
        </CardBody>
      </Card>
    </Col>
  ));

  return (
    <Row>
      {cards}
    </Row>
  );
};

RecipeListing.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  reFetch: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

RecipeListing.defaultProps = {
  reFetch: null,
  error: null,
  loading: false,
};

export default RecipeListing;
