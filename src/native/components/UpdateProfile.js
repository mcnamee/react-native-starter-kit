import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Card, CardItem, Text, Body, Form, Item, Label, Input, CheckBox, Button } from 'native-base';
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
        <Card>
          <CardItem header>
            <Text>Update Profile</Text>
          </CardItem>
          <CardItem>
            <Body>
              {error && <Messages message={error} />}
              {success && <Messages message={success} type="success" />}

              <Form>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input
                    value={this.state.firstName}
                    onChangeText={v => this.handleChange('firstName', v)}
                  />
                </Item>

                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input
                    value={this.state.lastName}
                    onChangeText={v => this.handleChange('lastName', v)}
                  />
                </Item>

                <CheckBox
                  title="Change Email"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.state.changeEmail}
                  onPress={() => this.handleChange('changeEmail', !this.state.changeEmail)}
                />

                {this.state.changeEmail &&
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                      value={this.state.email}
                      keyboardType="email-address"
                      onChangeText={v => this.handleChange('email', v)}
                    />
                  </Item>
                }

                <CheckBox
                  title="Change Password"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.state.changePassword}
                  onPress={() => this.handleChange('changePassword', !this.state.changePassword)}
                />

                {this.state.changePassword &&
                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry onChangeText={v => this.handleChange('password', v)} />

                    <Label>Confirm Password</Label>
                    <Input secureTextEntry onChangeText={v => this.handleChange('password2', v)} />
                  </Item>
                }
              </Form>

              <Button
                containerViewStyle={{ marginTop: 15 }}
                backgroundColor={AppColors.brand.primary}
                onPress={this.handleSubmit}
              >
                <Text>Update Profile</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

export default UpdateProfile;
