import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateProfile } from '../actions/member';

const UpdateProfile = ({
  Layout,
  onFormSubmit,
  member,
  isLoading,
  errorMessage,
  successMessage,
}) => (
  <Layout
    member={member}
    loading={isLoading}
    error={errorMessage}
    success={successMessage}
    onFormSubmit={onFormSubmit}
  />
);

UpdateProfile.propTypes = {
  Layout: PropTypes.func.isRequired,
  member: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

UpdateProfile.defaultProps = {
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.status.loading || false,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
});

const mapDispatchToProps = {
  onFormSubmit: updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
