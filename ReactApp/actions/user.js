/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import AppAPI from '../api';
import jwtDecode from 'jwt-decode'

export function login(credentials) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			if (!credentials) credentials = null;
			
			AppAPI.authenticate(credentials)
			  .then((token) => {

			  	try {
			  	  var decodedToken = jwtDecode(token);
			  	} catch (err) {
			  	  return reject('Token decode failed.');
			  	}

			  	if (!decodedToken || !decodedToken.data || !decodedToken.data.user || !decodedToken.data.user.id) {
			  		return reject('Token decode failed.');
			  	}

			  	AppAPI.users.get(decodedToken.data.user.id)
				  	.then((userData) => {
	  			  	dispatch({
	  			  		type: 'USER_REPLACE',
	  			  		data: userData,
	  		  		});

				  		resolve(userData);
				  	}).catch((err) => {
				  		reject(err);
				  	});

		  	}).catch(err => {
		  		reject(err);
		  	});
		});
	}
}

export function logout() {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			return AppAPI.logout()
				.then(() => {
			  	dispatch({
			  		type: 'USER_REPLACE',
			  		data: {},
		  		});

		  		resolve();
		  	}).catch(err => {
		  		reject(err);
		  	});
  	});
	}
}