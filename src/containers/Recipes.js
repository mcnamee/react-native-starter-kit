import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRecipes } from '../actions/recipes';

class RecipeListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    recipes: PropTypes.arrayOf(PropTypes.object),
    getRecipes: PropTypes.func.isRequired,
  }

  static defaultProps = {
    recipes: [],
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchRecipes();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchRecipes = () => this.props.getRecipes()
    .then(() => this.setState({ error: null, loading: false }))
    .catch(err => this.setState({ error: err.message, loading: false }))

  render = () => {
    const { Layout } = this.props;

    return (
      <Layout
        error={this.state.error}
        loading={this.state.loading}
        recipes={this.props.recipes}
        reFetch={this.fetchRecipes}
      />
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes || [],
});

const mapDispatchToProps = {
  getRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing);
