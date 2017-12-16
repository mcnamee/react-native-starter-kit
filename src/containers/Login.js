import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../actions/member';

const Login = ({ Layout, onFormSubmit, member }) => (
  <Layout
    member={member}
    error={member.error}
    loading={member.loading}
    onFormSubmit={onFormSubmit}
  />
);

Login.propTypes = {
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
  onFormSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
