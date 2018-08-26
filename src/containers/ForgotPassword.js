import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetPassword } from '../actions/member';

class ForgotPassword extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    member: PropTypes.shape({}).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
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
      Layout,
      isLoading,
    } = this.props;

    const { errorMessage } = this.state;

    return (
      <Layout
        member={member}
        loading={isLoading}
        error={errorMessage}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.status.loading || false,
});

const mapDispatchToProps = {
  onFormSubmit: resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
