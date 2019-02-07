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

export const GET_USERINFO_START = 'GET_USERINFO_START';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAILURE = 'GET_USERINFO_FAILURE';

export const registerUser = user => dispatch => {
	dispatch({ type: REGISTER_START });
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/register`,
		data: {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			password: user.password,
			userRole: user.userRole,
			userName: user.userName
		}
	})
		.then(res => {
			dispatch({ type: REGISTER_SUCCESS, payload: res });
			localStorage.setItem('id', res.data[0]);
			window.location.reload();
		})
		.catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

export const loginUser = user => dispatch => {
	dispatch({ type: LOGIN_START });
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/login`,
		data: {
			password: user.password,
			userName: user.userName
		}
	})
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res });
			localStorage.setItem('userToken', res.data.token);
			localStorage.setItem('userID', res.data.user.id);
			window.location.reload();
		})
		.catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const getUserInfo = userToken => dispatch => {
	dispatch({ type: GET_USERINFO_START });
	axios({
		method: 'get',
		url: 'https://luncher-2-bw-19-lambda.herokuapp.com/users/info',
		headers: {
			Authorization: userToken
		}
	})
		.then(res => dispatch({ type: GET_USERINFO_SUCCESS, payload: res }))
		.catch(err => dispatch({ type: GET_USERINFO_FAILURE, payload: err }));
};
