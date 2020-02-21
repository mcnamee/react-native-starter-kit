import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Articles/Single';

class ArticlesSingleContainer extends Component {
  constructor() {
    super();
    this.state = { loading: false, error: null, article: {} };
  }

  componentDidMount = () => this.fetchData();

  /**
   * Fetch Data
   */
  fetchData = async () => {
    const { fetchData, id } = this.props;

    this.setState({ loading: true, error: null });

    try {
      const article = await fetchData(id);
      this.setState({ loading: false, error: null, article });
    } catch (err) {
      this.setState({ loading: false, error: err.message, article: {} });
    }
  };

  /**
   * Render
   */
  render = () => {
    const { loading, error, article } = this.state;

    return <Layout loading={loading} error={error} article={article} reFetch={this.fetchData} />;
  };
}

ArticlesSingleContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArticlesSingleContainer.defaultProps = {
  id: null,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchSingle,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSingleContainer);
