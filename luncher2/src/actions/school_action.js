//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const GET_ALLSCHOOLS_START = 'GET_ALLSCHOOLS_START ';
export const GET_ALLSCHOOLS_SUCCESS = 'GET_ALLSCHOOLS_SUCCESS';
export const GET_ALLSCHOOLS_FAILURE = 'GET_ALLSCHOOLS_FAILURE';

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILURE = 'DELETE_SCHOOL_FAILURE';

export const ADD_SCHOOL_START = 'ADD_SCHOOL_START';
export const ADD_SCHOOL_SUCCESS = 'ADD_SCHOOL_SUCCESS';
export const ADD_SCHOOL_FAILURE = 'ADD_SCHOOL_FAILURE';

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

export const deleteSchool = (userToken, schoolID) => dispatch => {
	console.log('delete action', schoolID);
	dispatch({ type: DELETE_SCHOOL_START });
	axios({
		method: 'delete',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/delete/${schoolID}`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res => {
			console.log('delete success', res);
			dispatch({ type: DELETE_SCHOOL_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: DELETE_SCHOOL_FAILURE, payload: err }));
};

export const addSchool = (userToken, school) => dispatch => {
	console.log('delete action', school);
	dispatch({ type: ADD_SCHOOL_START });
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/`,
		headers: {
			Authorization: userToken,
		},
		data: {
			image: school.schoolimage,
			schoolname: school.schoolname,
		},
	})
		.then(res => {
			console.log('add success', res);
			dispatch({ type: ADD_SCHOOL_SUCCESS, payload: res });
			window.location.reload();
		})
		.catch(err => dispatch({ type: ADD_SCHOOL_FAILURE, payload: err }));
};
