/**
 * Form SCREEN
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise App
  =============================== */
  // React
  import React, { Component } from 'react';
  import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';

  // App Globals
  import AppStyles from '../../../styles.ios';
  // import AppConfig from '../../../config.ios';
  import AppUtil from '../../../util.ios';
  import AppDB from '../../../db.ios';

  // Module Globals
  // import ModuleConfig from '../config.ios';
  // import ModuleStyles from '../styles.ios';

  // 3rd Party Components
  import FormValidation from 'tcomb-form-native';

  // Components
  import Button from '../../../components/button.ios';

/* ==============================
  Form
  =============================== */
  var Form = React.createClass({
    /**
      * Sets initial state
      */
    getInitialState: function() {
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

      return {
        show_save_msg: false,
        form_fields: FormValidation.struct({
          First_name: FormValidation.String,
          Last_name: FormValidation.String,
          Email: valid_email,
          Password: valid_password,
          Confirm_password: valid_password,
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
              type: 'password',
            },
            Confirm_password: { 
              error: 'Please repeat your new password',
              type: 'password',
            },
          }
        },
      };
    },

    /**
      * Executes after all modules have been loaded
      */
    componentDidMount: function() {
      var self = this;

      // Get setting from local DB to populate fields
      AppDB.settings.get_all(function(result){
        if(result.totalrows > 0) {
          var firstIndex = AppUtil.firstIndexInObj(result.rows);
          self.setState({form_values: result.rows[firstIndex].values});
        }
      });
    },

    /**
      * Save Form Data to App
      */
    _saveData: function(callback) {
      var values = this.state.form_values;

      // Check if data exists so we know if to add or update
      AppDB.settings.get_all(function(result){
        if(result.totalrows == 0) {
          // Add data to the local DB
          AppDB.settings.add({values}, function(added_data){
            return callback(added_data);
          });
        } else {
          // Update row
          var firstIndex = AppUtil.firstIndexInObj(result.rows);
          AppDB.settings.update_id(firstIndex, {values}, function(updated_data){
            return callback(updated_data);
          });
        }
      });
    },

    /**
      * Delete Data
      */
    _deleteData: function(callback) {
      var self = this;

      // Erase the DB
      AppDB.settings.erase_db(function(removed_data){
        self.setState({form_values: self.state.empty_form_values});
        return callback();
      });
    },

    /**
      * Sign Up
      */
    _signUp: function() {
      var self = this;

      // Get new values and update
      var value = self.refs.form.getValue();

      // Check whether passwords match
      if(value && value.Password != value.Confirm_password) {
        self.setState({
          options: FormValidation.update(self.state.options, {
            fields: {
              Confirm_password: {
                hasError: {'$set': true},
                error: {'$set': 'Passwords don\'t match'}
              }
            }
          })
        });
        return false;
      }

      // Form is valid
      if(value) {
        self.setState({form_values: value}, function(){
          self._saveData(function(result){
            // Show save message
            self.setState({show_save_msg: true});
          });
        });
      }
    },

    /**
      * RENDER
      */
    render: function() {
      var Form = FormValidation.form.Form;

      return (
        <ScrollView automaticallyAdjustContentInsets={false} 
          style={[AppStyles.container]}
          contentContainerStyle={[AppStyles.containerCentered, styles.container]}>
          <View style={[AppStyles.paddingHorizontal]}>

            {this.state.show_save_msg && this.state.form_values.First_name != '' ?
              <View>
                <View style={[AppStyles.msg]}>
                  <Text style={[AppStyles.baseText, AppStyles.msg_text]}>Saved</Text>
                </View>

                <View style={AppStyles.spacer_20} />
              </View>
            : null}

            <Text style={[AppStyles.baseText, AppStyles.h3, AppStyles.centered]}>
              {this.state.form_values.First_name == '' ? "Sign Up" : "Update Profile"}
            </Text>

            <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
              This page saves your input to the local DB. We also have form validation: required first and last name, valid email address + password validation (required, must be 6 characters or more + must match each other)
            </Text>
            
            <View style={AppStyles.spacer_20} />

            <Form
              ref="form"
              type={this.state.form_fields}
              value={this.state.form_values}
              options={this.state.options} />
          </View>

          <View style={[AppStyles.grid_row]}>
            <View style={[AppStyles.grid_twoThirds, AppStyles.paddingLeft]}>
              <View style={AppStyles.spacer_15} />
              <TouchableOpacity onPress={()=>{this._deleteData()}}>
                <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.link]}>Clear My Info</Text>
              </TouchableOpacity>
            </View>

            <View style={[AppStyles.grid_third, AppStyles.paddingRight]}>
              <Button
                text={"Save"}
                onPress={this._signUp} />
            </View>
          </View>

          <View style={AppStyles.hr} />

          <View style={[AppStyles.paddingHorizontal]}>
            <Button
              text={'Sign In'}
              onPress={()=>alert('Just for looks')} />

            <Button
              text={'Guest Checkout'}
              style={'outlined'}
              onPress={()=>alert('Just for looks')} />
          </View>

        </ScrollView>
      );
    },

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
    container: {
      paddingTop: 15,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Form;
  module.exports.details = {
    title: 'Form'
  };