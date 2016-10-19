/**
 * Login SCREEN
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TextInput,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import FormValidation from 'tcomb-form-native'

// Actions
import * as UserActions from '../actions/user'

// App Globals
import AppStyles from '../styles'
import AppUtil from '../util'
import AppAPI from '../api'

// Components
import Button from '../components/button'
import Alerts from '../components/alerts'

/* Component ==================================================================== */
class Login extends Component {
  static componentName = 'Login';

  constructor(props) {
    super(props);

    // Email Validation
    var valid_email = FormValidation.refinement(
      FormValidation.String, function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
      }
    );

    // Password Validation - Must be 6 chars long
    var valid_password = FormValidation.refinement(
      FormValidation.String, function (password) {
        if(password.length < 6) return false;
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
        Email: valid_email,
        Password: valid_password,
      }),
      empty_form_values: {
        Email: '',
        Password: '',
      },
      form_values: {},
      options: {
        fields: {
          Email: { error: 'Please enter a valid email' },
          Password: {
            error: 'Your new password must be more than 6 characters', 
            secureTextEntry: true,
          },
        }
      },
    }
  }

  /**
    * Executes after all modules have been loaded
    */
  componentDidMount = async () => {
    // Get user data from AsyncStorage to populate fields
    const values = await AsyncStorage.getItem('api/credentials');
    let jsonValues = JSON.parse(values);

    if (values !== null) {
      this.setState({ form_values: {
      	Email: jsonValues.username,
      	Password: jsonValues.password,
      } });
    }
  }

  /**
    * Login
    */
  _login = () => {
    // Get new credentials and update
    var credentials = this.refs.form.getValue();

    // Form is valid
    if(credentials) {
      this.setState({form_values: credentials}, () => {
      	this.setState({ resultMsg: { status: 'One moment...' }});

        // Scroll to top, to show message
        if (this.refs && this.refs.scrollView) {
          this.refs.scrollView.scrollTo({ y: 0 });
        }

        this.props.login({
	        	username: credentials.Email,
	        	password: credentials.Password,
	        }).then(res => {
        		this.setState({ resultMsg: { success: 'Awesome, you\'re now logged in!' } });
        	}).catch(err => {
        		let error = AppAPI.handleError(err);
        		this.setState({ resultMsg: { error } });
        	});
      });
    }
  }

  /**
    * RENDER
    */
  render = () => {
    var Form = FormValidation.form.Form;

    return (
      <ScrollView automaticallyAdjustContentInsets={false} 
        ref={'scrollView'}
        style={[AppStyles.container]}
        contentContainerStyle={[AppStyles.containerCentered, styles.container]}>
        <View style={[AppStyles.paddingHorizontal]}>

          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error} />
          
          <View style={AppStyles.spacer_20} />

          <Form
            ref="form"
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options} />
        </View>

        <View style={[AppStyles.row]}>
          <View style={[AppStyles.flex2]} />
          <View style={[AppStyles.flex1, AppStyles.paddingRight]}>
            <Button
              text={"Login"}
              onPress={this._login} />
          </View>
        </View>

        <View style={AppStyles.hr} />

        <View style={[AppStyles.paddingHorizontal]}>
          <Button
            text={'Sign In'}
            onPress={()=>alert('Just for looks')} />

          <Button
            text={'Guest Checkout'}
            type={'outlined'}
            onPress={()=>alert('Just for looks')} />
        </View>

      </ScrollView>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

/* Export Component ==================================================================== */
// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  user: state.user,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  login: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);