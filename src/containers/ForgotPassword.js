import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetPassword } from '../actions/member';

const ForgotPassword = ({ Layout, onFormSubmit, member }) => (
  <Layout
    member={member}
    error={member.error}
    loading={member.loading}
    onFormSubmit={onFormSubmit}
  />
);

ForgotPassword.propTypes = {
  Layout: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  member: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  onFormSubmit: resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
