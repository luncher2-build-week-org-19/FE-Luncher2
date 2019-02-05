//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const GET_ALLSCHOOLS_START = 'GET_ALLSCHOOLS_START ';
export const GET_ALLSCHOOLS_SUCCESS = 'GET_ALLSCHOOLS_SUCCESS';
export const GET_ALLSCHOOLS_FAILURE = 'GET_ALLSCHOOLS_FAILURE';

export const getAllSchools = userToken => dispatch => {
	dispatch({ type: GET_ALLSCHOOLS_START });
	console.log('getAllSchools', userToken);
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res => {
			console.log('response', res);
			dispatch({ type: GET_ALLSCHOOLS_SUCCESS, payload: res });
			localStorage.setItem('id', res.data[0]);
		})
		.catch(err => dispatch({ type: GET_ALLSCHOOLS_FAILURE, payload: err }));
};
