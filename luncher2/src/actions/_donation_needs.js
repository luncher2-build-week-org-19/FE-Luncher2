import axios from 'axios';

export const GET_ALL_DONATIONS_START = 'GET_ALL_DONATIONS_START';
export const GET_ALL_DONATIONS_SUCCESS = 'GET_ALL_DONATIONS_SUCCESS';
export const GET_ALL_DONATIONS_FAILURE = 'GET_ALL_DONATIONS_FAILURE';

export const GET_DONATION_BY_ID_START = 'GET_DONATION_BY_ID_START';
export const GET_DONATION_BY_ID_SUCCESS = 'GET_DONATION_BY_ID_SUCCESS';
export const GET_DONATION_BY_ID_FAILURE = 'GET_DONATION_BY_ID_FAILURE';

export const GET_DONATIONS_BY_USER_ID_START = 'GET_DONATIONS_BY_USER_ID_START';
export const GET_DONATIONS_BY_USER_ID_SUCCESS = 'GET_DONATIONS_BY_USER_ID_SUCCESS';
export const GET_DONATIONS_BY_USER_ID_FAILURE = 'GET_DONATIONS_BY_USER_ID_FAILURE';

export const GET_DONATIONS_BY_SCHOOL_ID_START = 'GET_DONATIONS_BY_SCHOOL_ID_START';
export const GET_DONATIONS_BY_SCHOOL_ID_SUCCESS = 'GET_DONATIONS_BY_SCHOOL_ID_SUCCESS';
export const GET_DONATIONS_BY_SCHOOL_ID_FAILURE = 'GET_DONATIONS_BY_SCHOOL_ID_FAILURE';

export const ADD_NEW_DONATION_START = 'ADD_NEW_DONATION_START';
export const ADD_NEW_DONATION_SUCCESS = 'ADD_NEW_DONATION_SUCCESS';
export const ADD_NEW_DONATION_FAILURE = 'ADD_NEW_DONATION_FAILURE';

export const UPDATE_DONATION_START = 'UPDATE_DONATION_START';
export const UPDATE_DONATION_SUCCESS = 'UPDATE_DONATION_SUCCESS';
export const UPDATE_DONATION_FAILURE = 'UPDATE_DONATION_FAILURE';

export const DELETE_DONATION_START = 'DELETE_DONATION_START';
export const DELETE_DONATION_SUCCESS = 'DELETE_DONATION_SUCCESS';
export const DELETE_DONATION_FAILURE = 'DELETE_DONATION_FAILURE';

//**********************// GET_ALL_DONATIONS

export const getAllDonations = () => dispatch => {
	dispatch({ type: GET_ALL_DONATIONS_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/all`,
	})
		.then(res =>
			dispatch({
				type: GET_ALL_DONATIONS_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: GET_ALL_DONATIONS_FAILURE, payload: err }));
};

//**********************// GET_DONATIONS_BY_ID

export const getDonationsById = id => dispatch => {
	dispatch({ type: GET_DONATION_BY_ID_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/${id}`,
	})
		.then(res =>
			dispatch({
				type: GET_DONATION_BY_ID_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: GET_DONATION_BY_ID_FAILURE, payload: err }));
};

//**********************// GET_DONATIONS_BY_USER_ID

export const getDonationsByUserId = id => dispatch => {
	dispatch({ type: GET_DONATIONS_BY_USER_ID_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/user/${id}`,
	})
		.then(res =>
			dispatch({
				type: GET_DONATIONS_BY_USER_ID_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: GET_DONATIONS_BY_USER_ID_FAILURE, payload: err }));
};

//**********************// GET_DONATIONS_BY_SCHOOL_ID

export const getDonationsBySchoolId = id => dispatch => {
	dispatch({ type: GET_DONATIONS_BY_SCHOOL_ID_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/schools/${id}`,
	})
		.then(res =>
			dispatch({
				type: GET_DONATIONS_BY_SCHOOL_ID_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: GET_DONATIONS_BY_SCHOOL_ID_FAILURE, payload: err }));
};

//**********************// ADD_NEW_DONATION

export const addNewDonation = (userToken, donation, id) => dispatch => {
	dispatch({ type: ADD_NEW_DONATION_START });
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
		.then(res =>
			dispatch({
				type: ADD_NEW_DONATION_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: ADD_NEW_DONATION_FAILURE, payload: err }));
};

//**********************// UPDATE_DONATION

export const updateDonation = (userToken, donation, id) => dispatch => {
	dispatch({ type: UPDATE_DONATION_START });
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
		.then(res =>
			dispatch({
				type: UPDATE_DONATION_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: UPDATE_DONATION_FAILURE, payload: err }));
};

//**********************// DELETE_DONATION

export const deleteDonation = (userToken, id) => dispatch => {
	dispatch({ type: DELETE_DONATION_START });
	axios({
		method: 'delete',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/delete/${id}`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res =>
			dispatch({
				type: DELETE_DONATION_SUCCESS,
				payload: res.data,
			})
		)
		.catch(err => dispatch({ type: DELETE_DONATION_FAILURE, payload: err }));
};
