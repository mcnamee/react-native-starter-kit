/**
 * Recipe Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import AppAPI from '../api';

export function getMeals() {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			AppAPI.meals.get()
			  .then((res) => {
			  	dispatch({
			  		type: 'MEALS_REPLACE',
			  		data: res,
		  		});

		  		resolve(res);
		  	}).catch(err => {
		  		reject(err);
		  	});
		});
	}
}