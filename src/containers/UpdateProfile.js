import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UpdateProfile extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    member: PropTypes.shape({}).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    error: null,
    success: null,
    loading: false,
  }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;

    this.setState({ loading: true });

    return onFormSubmit(data)
      .then(() => this.setState({
        loading: false,
        success: 'Success - Updated',
        error: null,
      })).catch(err => this.setState({
        loading: false,
        success: null,
        error: err,
      }));
  }

  render = () => {
    const { member, Layout } = this.props;
    const { error, loading, success } = this.state;

    return (
      <Layout
        error={error}
        member={member}
        loading={loading}
        success={success}
        onFormSubmit={this.onFormSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: dispatch.member.updateProfile,
  getUserData: dispatch.member.getUserData
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
