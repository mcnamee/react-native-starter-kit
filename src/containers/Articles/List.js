import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Articles/List';

class ArticlesListContainer extends Component {
  constructor(props) {
    super();

    // Prioritize (web) page route over last meta value
    const page = props.page || props.meta.page;

    this.state = {
      error: null, loading: false, page: parseInt(page, 10) || 1,
    };
  }

  componentDidMount = () => this.fetchData();

  /**
   * If the page prop changes, update state
  */
  componentDidUpdate = (prevProps) => {
    const { page } = this.props;
    const { page: prevPage } = prevProps;

    if (page !== prevPage) {
      // eslint-disable-next-line
      this.setState({
        error: null, loading: false, page: parseInt(page, 10) || 1,
      }, this.fetchData);
    }
  }

  /**
   * Fetch Data
   */
  fetchData = async ({ forceSync = false, incrementPage = false } = {}) => {
    const { fetchData } = this.props;

    let { page } = this.state;
    page = incrementPage ? page + 1 : page; // Force fetch the next page worth of data when requested
    page = forceSync ? 1 : page; // Start from scratch

    this.setState({ loading: true, error: null, page });

    try {
      await fetchData({ forceSync, page });
      this.setState({ loading: false, error: null });
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  };

  /**
   * Render
   */
  render = () => {
    const {
      listFlat, listPaginated, pagination, meta,
    } = this.props;
    const { loading, error, page } = this.state;

    return (
      <Layout
        page={page}
        meta={meta}
        error={error}
        loading={loading}
        listFlat={listFlat}
        listPaginated={listPaginated}
        pagination={pagination}
        reFetch={this.fetchData}
      />
    );
  };
}

ArticlesListContainer.propTypes = {
  listFlat: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  listPaginated: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    page: PropTypes.number,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
  pagination: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArticlesListContainer.defaultProps = {
  page: 1,
};

const mapStateToProps = (state) => ({
  listFlat: state.articles.listFlat || [],
  listPaginated: state.articles.listPaginated || {},
  meta: state.articles.meta || [],
  pagination: state.articles.pagination || {},
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);
