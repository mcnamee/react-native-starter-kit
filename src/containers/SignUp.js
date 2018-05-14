import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signUp } from '../actions/member';

const SignUp = ({
  Layout,
  onFormSubmit,
  member,
  isLoading,
  infoMessage,
  errorMessage,
  successMessage,
}) => (
  <Layout
    member={member}
    loading={isLoading}
    info={infoMessage}
    error={errorMessage}
    success={successMessage}
    onFormSubmit={onFormSubmit}
  />
);

SignUp.propTypes = {
  Layout: PropTypes.func.isRequired,
  member: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  infoMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

SignUp.defaultProps = {
  infoMessage: null,
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.status.loading || false,
  infoMessage: state.status.info || null,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  onFormSubmit: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
