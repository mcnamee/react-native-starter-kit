/**
 * Signup SCREEN
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import FormValidation from 'tcomb-form-native';

// App Globals
import AppStyles from '../../styles';

// Components
import Button from '../../components/button';
import Alerts from '../../components/alerts';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

/* Component ==================================================================== */
class Signup extends Component {
  static componentName = 'Signup';

  constructor(props) {
    super(props);

    // Email Validation
    const validEmail = FormValidation.refinement(
      FormValidation.String, (email) => {
        const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }
    );

    // Password Validation - Must be 6 chars long
    const validPassword = FormValidation.refinement(
      FormValidation.String, (password) => {
        if (password.length < 6) return false;
        return true;
      }
    );

    // Initial state
    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct({
        First_name: FormValidation.String,
        Last_name: FormValidation.String,
        Email: validEmail,
        Password: validPassword,
        Confirm_password: validPassword,
      }),
      empty_form_values: {
        First_name: '',
        Last_name: '',
        Email: '',
        Password: '',
        Confirm_password: '',
      },
      form_values: {},
      options: {
        fields: {
          First_name: { error: 'Please enter your first name' },
          Last_name: { error: 'Please enter your last name' },
          Email: { error: 'Please enter a valid email' },
          Password: {
            error: 'Your new password must be more than 6 characters',
            secureTextEntry: true,
          },
          Confirm_password: {
            error: 'Please repeat your new password',
            secureTextEntry: true,
          },
        },
      },
    };
  }

  /**
    * Executes after all modules have been loaded
    */
  componentDidMount = async () => {
    // Get user data from AsyncStorage to populate fields
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.setState({ form_values: JSON.parse(value) });
    }
  }

  /**
    * Save Form Data to App
    */
  saveData = () => {
    const values = JSON.stringify(this.state.form_values);
    return AsyncStorage.setItem('user', values);
  }

  /**
    * Delete Data
    */
  deleteData = () => {
    AsyncStorage.removeItem('user')
      .then(() => {
        this.setState({ form_values: this.state.empty_form_values });
      }).catch(() => {
        Alert.alert('Oops', 'Something went wrong when deleting');
      });
  }

  /**
    * Sign Up
    */
  signUp = () => {
    // Get new values and update
    const values = this.refs.form.getValue();

    // Check whether passwords match
    if (values && values.Password !== values.Confirm_password) {
      this.setState({
        form_values: {
          ...values,
        },
        options: FormValidation.update(this.state.options, {
          fields: {
            Confirm_password: {
              hasError: { '$set': true },
              error: { '$set': 'Passwords don\'t match' },
            },
          },
        }),
      });

      return false;
    }

    // Form is valid
    if (values) {
      this.setState({ form_values: values }, () => {
        // Persist Data
        this.saveData()
          .then(() => {
            // Scroll to top, to show message
            if (this.refs && this.refs.scrollView) {
              this.refs.scrollView.scrollTo({ y: 0 });
            }

            // Show save message
            this.setState({
              resultMsg: { success: 'Awesome, that saved!' },
            });
          }).catch((error) => {
            // Show error message
            this.setState({
              resultMsg: { error },
            });
          });
      });
    }
  }

  /**
    * RENDER
    */
  render = () => {
    const Form = FormValidation.form.Form;

    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        ref={'scrollView'}
        style={[AppStyles.container]}
        contentContainerStyle={[AppStyles.containerCentered, styles.container]}
      >
        <View style={[AppStyles.paddingHorizontal]}>

          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error}
          />

          <Text style={[AppStyles.baseText, AppStyles.h3, AppStyles.centered]}>
            {this.state.form_values.First_name === '' ? 'Sign Up' : 'Update Profile'}
          </Text>

          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
            This page saves your input to the local DB. We also have form
            validation: required first and last name, valid email address
            + password validation (required, must be 6 characters or more
            + must match each other)
          </Text>

          <View style={AppStyles.spacer_20} />

          <Form
            ref={'form'}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />
        </View>

        <View style={[AppStyles.row]}>
          <View style={[AppStyles.flex2, AppStyles.paddingLeft]}>
            <View style={AppStyles.spacer_15} />
            <TouchableOpacity onPress={this.deleteData}>
              <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.link]}>
                Clear My Info
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[AppStyles.flex1, AppStyles.paddingRight]}>
            <Button
              text={'Save'}
              onPress={this.signUp}
            />
          </View>
        </View>

        <View style={AppStyles.hr} />

        <View style={[AppStyles.paddingHorizontal]}>
          <Button
            text={'Sign In'}
            onPress={() => Alert.alert('Hello', 'Just for looks')}
          />

          <Button
            text={'Guest Checkout'}
            type={'outlined'}
            onPress={() => Alert.alert('Hello', 'Just for looks')}
          />
        </View>

      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default Signup;
