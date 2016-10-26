/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import AppAPI from '../api';

export function login(credentials) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			if (!credentials) credentials = null;
			
			AppAPI.authenticate(credentials)
			  .then((authResponse) => {
			  	
			  	dispatch({
			  		type: 'USER_REPLACE',
			  		data: {
			  			username: authResponse.user_display_name,
			  			email: authResponse.user_email
		  			},
		  		});

		  		resolve(authResponse);

			  	/*AppAPI.users.get('me')
				  	.then((userData) => {
	  			  	dispatch({
	  			  		type: 'USER_REPLACE',
	  			  		data: userData,
	  		  		});

				  		resolve(userData);

				  	}).catch((err) => {
				  		reject(err);
				  	});*/
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