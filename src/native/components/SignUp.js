import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Card, FormLabel, FormInput, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppColors from '../constants/colors';
import Loading from './Loading';
import Messages from './Messages';

class SignUp extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
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
      .then(() => Actions.tabbar())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <ScrollView>
        <Card title="Sign Up">
          <View>
            {error && <Messages message={error} />}

            <FormLabel>First Name</FormLabel>
            <FormInput onChangeText={v => this.handleChange('firstName', v)} />

            <FormLabel>Last Name</FormLabel>
            <FormInput onChangeText={v => this.handleChange('lastName', v)} />

            <FormLabel>Email</FormLabel>
            <FormInput keyboardType="email-address" onChangeText={v => this.handleChange('email', v)} />

            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry onChangeText={v => this.handleChange('password', v)} />

            <FormLabel>Confirm Password</FormLabel>
            <FormInput secureTextEntry onChangeText={v => this.handleChange('password2', v)} />

            <Button
              containerViewStyle={{ marginTop: 15 }}
              backgroundColor={AppColors.brand.primary}
              onPress={this.handleSubmit}
              title="Sign Up"
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default SignUp;
