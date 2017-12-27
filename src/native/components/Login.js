import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Card, CardItem, Body, Form, Item, Label, Input, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppColors from '../constants/colors';
import Loading from './Loading';
import Messages from './Messages';

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
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
            <Text>Login</Text>
          </CardItem>
          <CardItem>
            <Body>
              {error && <Messages message={error} />}

              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input
                    value={this.state.email}
                    keyboardType="email-address"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={v => this.handleChange('password', v)}
                  />
                </Item>
              </Form>

              <Button
                containerViewStyle={{ marginTop: 15 }}
                backgroundColor={AppColors.brand.primary}
                onPress={this.handleSubmit}
                title="Login"
              />
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

export default Login;
