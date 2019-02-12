import {
	GET_ALL_DONATIONS_START,
	GET_ALL_DONATIONS_SUCCESS,
	GET_ALL_DONATIONS_FAILURE,
	GET_DONATION_BY_ID_START,
	GET_DONATION_BY_ID_SUCCESS,
	GET_DONATION_BY_ID_FAILURE,
	GET_DONATIONS_BY_USER_ID_START,
	GET_DONATIONS_BY_USER_ID_SUCCESS,
	GET_DONATIONS_BY_USER_ID_FAILURE,
	GET_DONATIONS_BY_SCHOOL_ID_START,
	GET_DONATIONS_BY_SCHOOL_ID_SUCCESS,
	GET_DONATIONS_BY_SCHOOL_ID_FAILURE,
	ADD_NEW_DONATION_START,
	ADD_NEW_DONATION_SUCCESS,
	ADD_NEW_DONATION_FAILURE,
	DELETE_DONATION_START,
	DELETE_DONATION_SUCCESS,
	DELETE_DONATION_FAILURE,
} from '../actions/_donation_needs';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//**********************// GET ALL DONATIONS
		case GET_ALL_DONATIONS_START:
			return {
				...state,
				// isLoading
				// error
			};
		case GET_ALL_DONATIONS_SUCCESS:
			return {
				...state,
				// isLoading
				// error
			};
		case GET_ALL_DONATIONS_FAILURE:
			return {
				...state,
				// isLoading
				// error
			};
		default:
			return state;
	}
};

export default reducer;
