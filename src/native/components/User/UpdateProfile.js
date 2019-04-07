import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Body, ListItem, Form, Item, Label, Input, CheckBox, Button, View,
} from 'native-base';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

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

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
    const { onFormSubmit } = this.props;

    return onFormSubmit(this.state).catch(() => {});
  }

  render() {
    const { loading, error, success } = this.props;
    const {
      firstName, lastName, email, changeEmail, changePassword,
    } = this.state;

    return (
      <Container>
        <Content padder>
          <Header
            title="Update my profile"
            content="Thanks for keeping your account up to date!"
          />

          {error && <Messages message={error} />}
          {success && <Messages message={success} type="success" />}

          <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input
                value={firstName}
                disabled={loading}
                onChangeText={v => this.handleChange('firstName', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input
                value={lastName}
                disabled={loading}
                onChangeText={v => this.handleChange('lastName', v)}
              />
            </Item>

            <ListItem>
              <CheckBox
                checked={changeEmail}
                onPress={() => this.handleChange('changeEmail', !changeEmail)}
              />
              <Body>
                <Text>Change Email</Text>
              </Body>
            </ListItem>

            {changeEmail && (
              <Item stackedLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  value={email}
                  keyboardType="email-address"
                  disabled={loading}
                  onChangeText={v => this.handleChange('email', v)}
                />
              </Item>
            )}

            <ListItem>
              <CheckBox
                checked={changePassword}
                onPress={() => this.handleChange('changePassword', !changePassword)}
              />
              <Body>
                <Text>Change Password</Text>
              </Body>
            </ListItem>

            {changePassword && (
              <View padder>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={v => this.handleChange('password', v)}
                    disabled={loading}
                  />
                </Item>

                <Item stackedLabel last>
                  <Label>Confirm Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={v => this.handleChange('password2', v)}
                    disabled={loading}
                  />
                </Item>
              </View>
            )}

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit} disabled={loading}>
              <Text>{loading ? 'Loading' : 'Update Profile'}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default UpdateProfile;
