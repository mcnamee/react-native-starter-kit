import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Card, FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';
import AppColors from '../constants/colors';
import Messages from './Messages';
import Loading from './Loading';

class UpdateProfile extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    member: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.member.firstName || '',
      lastName: props.member.lastName || '',
      email: props.member.email || '',
      password: '',
      password2: '',
      changeEmail: false,
      changePassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => console.log('Profile Updated'))
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error, success } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <ScrollView>
        <Card title="Update Profile">
          <View>
            {error && <Messages message={error} />}
            {success && <Messages message={success} type="success" />}

            <FormLabel>First Name</FormLabel>
            <FormInput
              value={this.state.firstName}
              onChangeText={v => this.handleChange('firstName', v)}
            />

            <FormLabel>Last Name</FormLabel>
            <FormInput
              value={this.state.lastName}
              onChangeText={v => this.handleChange('lastName', v)}
            />

            <CheckBox
              title="Change Email"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.changeEmail}
              onPress={() => this.handleChange('changeEmail', !this.state.changeEmail)}
            />

            {this.state.changeEmail &&
              <View>
                <FormLabel>Email</FormLabel>
                <FormInput
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={v => this.handleChange('email', v)}
                />
              </View>
            }

            <CheckBox
              title="Change Password"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.changePassword}
              onPress={() => this.handleChange('changePassword', !this.state.changePassword)}
            />

            {this.state.changePassword &&
              <View>
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry onChangeText={v => this.handleChange('password', v)} />

                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry onChangeText={v => this.handleChange('password2', v)} />
              </View>
            }

            <Button
              containerViewStyle={{ marginTop: 15 }}
              backgroundColor={AppColors.brand.primary}
              onPress={this.handleSubmit}
              title="Update Profile"
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default UpdateProfile;
