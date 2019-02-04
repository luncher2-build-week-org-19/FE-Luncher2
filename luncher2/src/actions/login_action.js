//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const REGISTER_START = 'REGISTER_START ';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START ';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const registerUser = user => dispatch => {
	dispatch({ type: REGISTER_START });
	console.log('registerUser', user.password);
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/register`,
		// headers: {
		// 	Authorization: token,
		// },
		data: {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			password: user.password,
			userRole: user.userRole,
			userName: user.userName,
		},
	})
		.then(res => {
			console.log('response', res);
			dispatch({ type: REGISTER_SUCCESS, payload: res });
			localStorage.setItem('id', res.data[0]);
		})
		.catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

export const loginUser = user => dispatch => {
	dispatch({ type: LOGIN_START });
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/login`,
		// headers: {
		// 	Authorization: token,
		// },
		data: {
			password: user.password,
			userName: user.userName,
		},
	})
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res });
			localStorage.setItem('token', res.token);
		})
		.catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};
