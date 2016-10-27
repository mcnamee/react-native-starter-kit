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
import * as UserActions from '../../actions/user'

// App Globals
import AppStyles from '../../styles'
import AppUtil from '../../util'
import AppAPI from '../../api'
import AppConfig from '../../config'

// Components
import Button from '../../components/button'
import Alerts from '../../components/alerts'

// Screens
import Index from '../../screens/recipes/tabs';

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
      this.setState({ 
        form_values: {
        	Email: jsonValues.username,
        	Password: jsonValues.password,
        } 
      });
    }
  }

  /**
    * Login
    */
  _login = () => {
    // Get new credentials and update
    var credentials = this.refs.form.getValue();

    // Form is valid
    if (credentials) {
      this.setState({ form_values: credentials }, () => {
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

            setTimeout(() => {
              this.props.navigator.replace({
                title: AppConfig.appName,
                component: Index, 
                index: 2,
              });
            }, 1000);
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
        contentContainerStyle={[AppStyles.container]}>
        <View style={[AppStyles.paddingHorizontal]}>

          <View style={AppStyles.spacer_20} />

          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error} />

          <Form
            ref="form"
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options} />
        </View>

        <View style={[AppStyles.row]}>
          <View style={[AppStyles.flex1, AppStyles.paddingHorizontal]}>
            <Button
              text={"Login"}
              onPress={this._login} />
          </View>
        </View>

        <View style={AppStyles.hr} />

        <View style={[AppStyles.paddingHorizontal]}>
          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
            - or -
          </Text>

          <Button
            text={'Sign In'}
            type={'outlined'}
            onPress={()=>alert('Just for looks')} />
        </View>

      </ScrollView>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
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