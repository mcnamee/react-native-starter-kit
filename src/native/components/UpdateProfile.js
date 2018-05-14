import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Body, ListItem, Form, Item, Label, Input, CheckBox, Button, View } from 'native-base';
import Messages from './Messages';
import Loading from './Loading';
import Header from './Header';
import Spacer from './Spacer';

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
                value={this.state.firstName}
                onChangeText={v => this.handleChange('firstName', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input
                value={this.state.lastName}
                onChangeText={v => this.handleChange('lastName', v)}
              />
            </Item>

            <ListItem>
              <CheckBox
                checked={this.state.changeEmail}
                onPress={() => this.handleChange('changeEmail', !this.state.changeEmail)}
              />
              <Body>
                <Text>Change Email</Text>
              </Body>
            </ListItem>

            {this.state.changeEmail &&
              <Item stackedLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  value={this.state.email}
                  keyboardType="email-address"
                  onChangeText={v => this.handleChange('email', v)}
                />
              </Item>
            }

            <ListItem>
              <CheckBox
                checked={this.state.changePassword}
                onPress={() => this.handleChange('changePassword', !this.state.changePassword)}
              />
              <Body>
                <Text>Change Password</Text>
              </Body>
            </ListItem>

            {this.state.changePassword &&
              <View padder>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry onChangeText={v => this.handleChange('password', v)} />
                </Item>

                <Item stackedLabel last>
                  <Label>Confirm Password</Label>
                  <Input secureTextEntry onChangeText={v => this.handleChange('password2', v)} />
                </Item>
              </View>
            }

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}>
              <Text>Update Profile</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default UpdateProfile;
