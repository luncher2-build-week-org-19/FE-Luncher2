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
	console.log('registerUser', user);
	axios
		.post('https://luncher-2-bw-19-lambda.herokuapp.com/users/register', user)
		.then(res => {
			dispatch({ type: REGISTER_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

export const loginUser = user => dispatch => {
	dispatch({ type: LOGIN_START });
	axios
		.get('https://luncher-2-bw-19-lambda.herokuapp.com/', user)
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};
