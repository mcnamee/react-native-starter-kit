/**
 * Sign Up Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  AsyncStorage,
} from 'react-native';
import FormValidation from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';

/* Component ==================================================================== */
class SignUp extends Component {
  static componentName = 'SignUp';

  static propTypes = {
    signUp: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    // Email Validation
    const validEmail = FormValidation.refinement(
      FormValidation.String, (email) => {
        const regularExpression = /^.+@.+\..+$/i;

        return regularExpression.test(email);
      },
    );

    // Password Validation - Must be 6 chars long
    const validPassword = FormValidation.refinement(
      FormValidation.String, (password) => {
        if (password.length < 6) return false;
        return true;
      },
    );

    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct({
        Email: validEmail,
        Password: validPassword,
      }),
      empty_form_values: {
        Email: '',
        Password: '',
      },
      form_values: {},
      options: {
        fields: {
          Email: {
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          Password: {
            error: 'Your new password must be more than 6 characters',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
        },
      },
    };
  }

  componentDidMount = async () => {
    // Get user data from AsyncStorage to populate fields
    const values = await AsyncStorage.getItem('api/credentials');
    const jsonValues = JSON.parse(values);

    if (values !== null) {
      this.setState({
        form_values: {
          Email: jsonValues.username,
          Password: jsonValues.password,
        },
      });
    }
  }

  /**
    * Sign Up
    */
  signUp = () => {
    // Get new credentials and update
    const credentials = this.form.getValue();

    // Form is valid
    if (credentials) {
      this.setState({ form_values: credentials }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) this.scrollView.scrollTo({ y: 0 });

        this.props.signUp(credentials.Email, credentials.Password).then(() => {
          // Show Sign Up success message
          this.setState({
            resultMsg: { success: 'Awesome, you\'re now signed up!' },
          }, () => {
            // Then log user in
            this.props.login(credentials.Email, credentials.Password).then(() => {
              // Show that user is now logged in
              this.setState({
                resultMsg: { success: 'Awesome, you\'re now logged in!' },
              }, () => {
                // Redirect to main App Screen
                setTimeout(() => {
                  Actions.app({ type: 'reset' });
                }, 1000);
              });
            });
          });
        }).catch((err) => {
          this.setState({ resultMsg: { error: err.message } });
        });
      });
    }
  }

  render = () => {
    const Form = FormValidation.form.Form;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        ref={(a) => { this.scrollView = a; }}
        style={[AppStyles.container]}
        contentContainerStyle={[AppStyles.container]}
      >
        <Card>
          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error}
          />

          <Form
            ref={(b) => { this.form = b; }}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />

          <Button
            title={'Sign Up'}
            onPress={this.signUp}
          />

          <Spacer size={20} />

          <Text p style={[AppStyles.textCenterAligned]}>
            - or -
          </Text>

          <Button
            title={'Login'}
            onPress={Actions.login}
          />
        </Card>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default SignUp;
