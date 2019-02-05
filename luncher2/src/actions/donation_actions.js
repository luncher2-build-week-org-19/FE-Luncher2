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

export const deleteDonation = (userToken, id) => dispatch => {
	console.log('delete action', id);
	dispatch({ type: DELETE_DONATION_START });
	axios({
		method: 'delete',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/delete/${id}`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res => {
			console.log('delete success', res);
			dispatch(
				{ type: DELETE_DONATION_SUCCESS, payload: res },
				window.location.reload()
			);
		})
		.catch(err =>
			dispatch({ type: DELETE_DONATION_FAILURE, payload: err })
		);
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
			dispatch(
				{ type: ADD_DONATION_SUCCESS, payload: res },
				window.location.reload()
			);
		})
		.catch(err => dispatch({ type: ADD_DONATION_FAILURE, payload: err }));
};

export const editDonation = (userToken, donation, id) => dispatch => {
	dispatch({ type: EDIT_DONATION_START });
	axios({
		method: 'put',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/update/${id}`,
		headers: {
			Authorization: userToken,
		},
		data: {
			title: donation.title,
			description: donation.description,
			amount: donation.amount,
		},
	})
		.then(
			res => (
				{ type: EDIT_DONATION_SUCCESS, payload: res },
				window.location.reload()
			)
		)
		.catch(err => ({ type: EDIT_DONATION_FAILURE, payload: err }));
};
