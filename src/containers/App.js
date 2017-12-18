import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logout } from '../actions/member';

const App = ({ Layout, member, memberLogout }) => (
  <Layout member={member} logout={memberLogout} />
);

App.propTypes = {
  Layout: PropTypes.func.isRequired,
  memberLogout: PropTypes.func.isRequired,
  member: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  memberLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
