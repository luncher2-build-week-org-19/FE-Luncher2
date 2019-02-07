//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const ADD_DONATION_START = 'ADD_DONATION_START ';
export const ADD_DONATION_SUCCESS = 'ADD_DONATION_SUCCESS';
export const ADD_DONATION_FAILURE = 'ADD_DONATION_FAILURE';

export const EDIT_DONATION_START = 'EDIT_DONATION_START ';
export const EDIT_DONATION_SUCCESS = 'EDIT_DONATION_SUCCESS';
export const EDIT_DONATION_FAILURE = 'EDIT_DONATION_FAILURE';

export const DELETE_DONATION_START = 'DELETE_DONATION_START ';
export const DELETE_DONATION_SUCCESS = 'DELETE_DONATION_SUCCESS';
export const DELETE_DONATION_FAILURE = 'DELTE_DONATION_FAILURE';

export const GET_SCHOOL_DONATIONS_START = 'GET_SCHOOL_DONATIONS_START';
export const GET_SCHOOL_DONATIONS_SUCCESS = 'GET_SCHOOL_DONATIONS_SUCCESS';
export const GET_SCHOOL_DONATIONS_FAILURE = 'GET_SCHOOL_DONATIONS_FAILURE';

export const GET_ALL_DONATIONS_SCHOOL_START = 'GET_ALL_DONATIONS_SCHOOL_START';
export const GET_ALL_DONATIONS_SCHOOL_SUCCESS = 'GET_ALL_DONATIONS_SCHOOL_SUCCESS';
export const GET_ALL_DONATIONS_SCHOOL_FAILURE = 'GET_ALL_DONATIONS_SCHOOL_FAILURE';

export const GET_SCHOOL_DONATIONS_START_2 = 'GET_SCHOOL_DONATIONS_START_2';
export const GET_SCHOOL_DONATIONS_SUCCESS_2 = 'GET_SCHOOL_DONATIONS_SUCCESS_2';
export const GET_SCHOOL_DONATIONS_FAILURE_2 = 'GET_SCHOOL_DONATIONS_FAILURE_2';

export const deleteDonation = (userToken, id) => dispatch => {
	dispatch({ type: DELETE_DONATION_START });
	axios({
		method: 'delete',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/delete/${id}`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res => {
			dispatch({ type: DELETE_DONATION_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: DELETE_DONATION_FAILURE, payload: err }));
};

export const addDonation = (userToken, donation, id) => dispatch => {
	dispatch({ type: ADD_DONATION_START });
	axios({
		method: 'post',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/schools/${id}`,
		headers: {
			Authorization: userToken,
		},
		data: {
			title: donation.title,
			description: donation.description,
			amount: donation.amount,
		},
	})
		.then(res => {
			dispatch({ type: ADD_DONATION_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: ADD_DONATION_FAILURE, payload: err }));
};

export const editDonation = (userToken, donation, donationId, schoolID) => dispatch => {
	dispatch({ type: EDIT_DONATION_START });
	axios({
		method: 'put',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/update/${donationId}`,
		headers: {
			Authorization: userToken,
		},
		data: {
			title: donation.title,
			description: donation.description,
			amount: donation.amount,
		},
	})
		.then(res => {
			dispatch({ type: EDIT_DONATION_SUCCESS, payload: res.data });
			dispatch({ type: GET_SCHOOL_DONATIONS_START_2 });
			axios({
				method: 'get',
				url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/schools/${schoolID}`,
			})
				.then(res =>
					dispatch({
						type: GET_SCHOOL_DONATIONS_SUCCESS_2,
						payload: res.data,
					})
				)
				.catch(err => dispatch({ type: GET_SCHOOL_DONATIONS_FAILURE_2, payload: err }));
		})
		.catch(err => dispatch({ type: EDIT_DONATION_FAILURE, payload: err }));
};

export const getAllDondationsBySchool = id => dispatch => {
	dispatch({ type: GET_ALL_DONATIONS_SCHOOL_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/made/${id}`,
	})
		.then(res => dispatch({ type: GET_ALL_DONATIONS_SCHOOL_SUCCESS, payload: res }))
		.catch(err => dispatch({ type: GET_ALL_DONATIONS_SCHOOL_FAILURE, payload: err }));
};

export const getSchoolDonations = id => dispatch => {
	dispatch({ type: GET_SCHOOL_DONATIONS_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/schools/${id}`,
	})
		.then(res =>
			dispatch({
				type: GET_SCHOOL_DONATIONS_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: GET_SCHOOL_DONATIONS_FAILURE, payload: err }));
};
