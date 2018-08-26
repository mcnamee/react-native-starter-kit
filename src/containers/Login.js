import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../actions/member';

class Login extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    locale: PropTypes.string,
    member: PropTypes.shape({}).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    locale: null,
  }

  state = {
    errorMessage: null,
  }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;
    return onFormSubmit(data)
      .catch((err) => { this.setState({ errorMessage: err }); throw err; });
  }

  render = () => {
    const {
      member,
      locale,
      Layout,
      isLoading,
    } = this.props;

    const { errorMessage } = this.state;

    return (
      <Layout
        member={member}
        locale={locale}
        loading={isLoading}
        error={errorMessage}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
  locale: state.locale || null,
  isLoading: state.status.loading || false,
});

const mapDispatchToProps = {
  onFormSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
