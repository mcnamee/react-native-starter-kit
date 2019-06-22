import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Member extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    memberLogout: PropTypes.func.isRequired,
    fetchMember: PropTypes.func.isRequired,
    member: PropTypes.shape({}).isRequired,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  fetchData = (data) => {
    const { fetchMember } = this.props;

    this.setState({ loading: true });

    return fetchMember(data)
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  logoutUser = () => {
    const { memberLogout } = this.props;
    return memberLogout().then(() => Actions.login());
  }

  render = () => {
    const { Layout, member, memberLogout } = this.props;
    const { loading, error } = this.state;

    return (
      <Layout
        error={error}
        loading={loading}
        member={member}
        logout={this.logoutUser}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = dispatch => ({
  memberLogout: dispatch.member.logout,
  fetchMember: dispatch.member.getMemberData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Member);
