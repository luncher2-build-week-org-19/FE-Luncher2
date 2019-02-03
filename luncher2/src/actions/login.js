//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const FETCH_REGISTER_START = 'FETCH_REGISTER_START ';
export const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS';
export const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE';

export const registerUser = user => dispatch => {
	dispatch({ type: FETCH_REGISTER_START });
	axios
		.get('https://luncher-2-bw-19-lambda.herokuapp.com/', user)
		.then(res => {
			dispatch({ type: FETCH_REGISTER_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: FETCH_REGISTER_FAILURE, payload: err }));
};
