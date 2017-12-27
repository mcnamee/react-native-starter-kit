import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Card, CardItem, Text, Body, Form, Item, Label, Input, Button } from 'native-base';
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
        <Card>
          <CardItem header>
            <Text>Sign Up</Text>
          </CardItem>
          <CardItem>
            <Body>
              {error && <Messages message={error} />}

              <Form>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input onChangeText={v => this.handleChange('firstName', v)} />
                </Item>

                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input onChangeText={v => this.handleChange('lastName', v)} />
                </Item>

                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input keyboardType="email-address" onChangeText={v => this.handleChange('email', v)} />
                </Item>

                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry onChangeText={v => this.handleChange('password', v)} />
                </Item>

                <Item floatingLabel>
                  <Label>Confirm Password</Label>
                  <Input secureTextEntry onChangeText={v => this.handleChange('password2', v)} />
                </Item>
              </Form>

              <Button
                containerViewStyle={{ marginTop: 15 }}
                backgroundColor={AppColors.brand.primary}
                onPress={this.handleSubmit}
              >
                <Text>Sign Up</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

export default SignUp;
