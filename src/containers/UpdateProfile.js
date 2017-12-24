import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateProfile } from '../actions/member';

const UpdateProfile = ({ Layout, onFormSubmit, member }) => (
  <Layout
    member={member}
    error={member.error}
    loading={member.loading}
    onFormSubmit={onFormSubmit}
  />
);

UpdateProfile.propTypes = {
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
  onFormSubmit: updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
