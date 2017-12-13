import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signUp } from '../actions/member';

const SignUp = ({ Layout, accountSignUp, member }) => (
  <Layout
    member={member}
    error={member.error}
    loading={member.loading}
    submitForm={accountSignUp}
  />
);

SignUp.propTypes = {
  Layout: PropTypes.func.isRequired,
  accountSignUp: PropTypes.func.isRequired,
  member: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  accountSignUp: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
