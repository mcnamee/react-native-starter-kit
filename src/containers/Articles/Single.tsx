import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Articles/Single';
import { Article } from '../../types/Article';

interface ArticlesSingleProps {
  fetchData: any;
  id: string;
}

interface ArticlesState {
  loading: boolean;
  error: string | undefined;
  article: Article | undefined;
}

class ArticlesSingleContainer extends Component<ArticlesSingleProps, ArticlesState> {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    id: null,
  };

  constructor(props) {
    super(props);
    this.state = { loading: false, error: undefined, article: undefined };
  }

  componentDidMount = () => this.fetchData();

  /**
   * Fetch Data
   */
  fetchData = async () => {
    const { fetchData, id } = this.props;

    this.setState({ loading: true, error: undefined });

    try {
      const article = await fetchData(id);
      this.setState({ loading: false, error: undefined, article });
    } catch (err) {
      this.setState({ loading: false, error: err.message, article: undefined });
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchSingle,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSingleContainer);
