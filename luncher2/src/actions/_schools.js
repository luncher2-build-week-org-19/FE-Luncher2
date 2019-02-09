import axios from 'axios';

// export const START = 'START'
// export const SUCCESS = 'SUCCESS'
// export const FAILURE = 'FAILURE'

export const GET_ALL_SCHOOLS_START = 'GET_ALL_SCHOOLS_START';
export const GET_ALL_SCHOOLS_SUCCESS = 'GET_ALL_SCHOOLS_SUCCESS';
export const GET_ALL_SCHOOLS_FAILURE = 'GET_ALL_SCHOOLS_FAILURE';

export const GET_SCHOOL_BY_ID_START = 'GET_SCHOOL_BY_ID_START';
export const GET_SCHOOL_BY_ID_SUCCESS = 'GET_SCHOOL_BY_ID_SUCCESS';
export const GET_SCHOOL_BY_ID_FAILURE = 'GET_SCHOOL_BY_ID_FAILURE';

//**********************// GET ALL SCHOOLS

export const getAllSchools = () => dispatch => {
	dispatch({ type: GET_ALL_SCHOOLS_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`,
	})
		.then(res => {
			dispatch({ type: GET_ALL_SCHOOLS_SUCCESS, payload: res });
		})
		.catch(err => dispatch({ type: GET_ALL_SCHOOLS_FAILURE, payload: err }));
};

//**********************// GET SCHOOL BY ID

export const getSchoolById = id => dispatch => {
	dispatch({ type: GET_SCHOOL_BY_ID_START });
	axios({
		method: 'get',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/${id}`,
	})
		.then(res => {
			dispatch({ type: GET_SCHOOL_BY_ID_SUCCESS, payload: res[0] });
		})
		.catch(err => dispatch({ type: GET_SCHOOL_BY_ID_FAILURE, payload: err }));
};
