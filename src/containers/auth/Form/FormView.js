/**
 * Login/Sign Up/Forgot Password Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import FormValidation from 'tcomb-form-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';
import TcombTextInput from '@components/tcomb/TextInput';

/* Component ==================================================================== */
class AuthForm extends Component {
  static componentName = 'Login';

  static propTypes = {
    login: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    formType: PropTypes.oneOf(['login', 'signup', 'passwordReset']),
  }

  static defaultProps = {
    formType: 'login',
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

    // What fields should exist in the form?
    const formFields = { Email: validEmail };

    // Add fields to the respective form type
    if (props.formType === 'login') {
      formFields.Password = validPassword;
    } else if (props.formType === 'signup') {
      formFields.Password = validPassword;
      formFields.FirstName = FormValidation.String;
      formFields.LastName = FormValidation.String;
    }

    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct(formFields),
      empty_form_values: {
        Email: '',
        Password: '',
      },
      form_values: {},
      options: {
        fields: {
          Email: {
            template: TcombTextInput,
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          Password: {
            template: TcombTextInput,
            error: 'Your new password must be more than 6 characters',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
          FirstName: {
            template: TcombTextInput,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing',
          },
          LastName: {
            template: TcombTextInput,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing',
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
    * Login
    */
  login = () => {
    // Get new credentials and update
    const credentials = this.form.getValue();

    // Form is valid
    if (credentials) {
      this.setState({ form_values: credentials }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) this.scrollView.scrollTo({ y: 0 });

        this.props.login(credentials.Email, credentials.Password).then(() => {
          this.setState({
            resultMsg: { success: 'Awesome, you\'re now logged in!' },
          }, () => {
            setTimeout(() => {
              Actions.app({ type: 'reset' });
            }, 1000);
          });
        }).catch((err) => {
          this.setState({ resultMsg: { error: err.message } });
        });
      });
    }
  }

  /**
    * Reset Password
    */
  resetPassword = () => {
    const credentials = this.form.getValue();

    // Form is valid
    if (credentials && credentials.Email) {
      this.props.resetPassword(credentials.Email)
        .then(() => {
          // Show that user is now logged in
          this.setState({
            resultMsg: { success: 'Cool, we\'ve sent you an email.' },
          }, () => {
            // Redirect to main App Screen
            setTimeout(() => {
              Actions.app({ type: 'reset' });
            }, 1000);
          });
        }).catch((err) => {
          this.setState({ resultMsg: { error: err.message } });
        });
    }
  }

  /**
    * Sign Up
    */
  signUp = () => {
    // Get new credentials and update
    const vals = this.form.getValue();

    // Form is valid
    if (vals) {
      this.setState({ form_values: vals }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) this.scrollView.scrollTo({ y: 0 });

        this.props.signUp(vals.Email, vals.Password, vals.FirstName, vals.LastName).then(() => {
          // Show Sign Up success message
          this.setState({
            resultMsg: { success: 'Awesome, you\'re now signed up!' },
          }, () => {
            // Then log user in
            this.props.login(vals.Email, vals.Password).then(() => {
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

          <Spacer size={10} />

          {this.props.formType === 'login' &&
            <Button title={'Login'} onPress={this.login} />
          }
          {this.props.formType === 'signup' &&
            <Button title={'Sign Up'} onPress={this.signUp} />
          }
          {this.props.formType === 'passwordReset' &&
            <Button title={'Send Instructions'} onPress={this.resetPassword} />
          }

          <Spacer size={10} />

          {this.props.formType === 'login' &&
            <View>
              <TouchableOpacity onPress={Actions.passwordReset}>
                <Text p style={[AppStyles.textCenterAligned, AppStyles.link]}>
                  Forgot Password
                </Text>
              </TouchableOpacity>

              <Spacer size={10} />

              <Text p style={[AppStyles.textCenterAligned]}>
                - or -
              </Text>

              <Button
                title={'Sign Up'}
                onPress={Actions.signUp}
              />
            </View>
          }
        </Card>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default AuthForm;
