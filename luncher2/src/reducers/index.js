import {
	FETCH_REGISTER_START,
	FETCH_REGISTER_SUCCESS,
	FETCH_REGISTER_FAILURE
	// FETCH_LOGIN_START,
	// FETCH_LOGIN_SUCCESS,
	// FETCH_LOGIN_FAILURE
} from '../actions/';

const initialState = {
	firstName: '',
	lastName: '',
	userRole: '',
	userName: '',
	email: '',
	password: '',
	id: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REGISTER_START:
			return {
				...state
			};
		case FETCH_REGISTER_SUCCESS:
			return {
				...state,
				id: action.payload
			};
		case FETCH_REGISTER_FAILURE:
			return {
				...state,
				error: action.payload
			};
		// case FETCH_LOGIN_START:
		// 	return {
		// 		...state,
		// 		smurfs: [...state.smurfs],
		// 		fetchingSmurfs: true,
		// 		error: ''
		// 	};
		// case FETCH_LOGIN_SUCCESS:
		// 	return {
		// 		...state,
		// 		smurfs: action.payload.data,
		// 		fetchingSmurfs: false,
		// 		error: ''
		// 	};
		// case FETCH_LOGIN_FAILURE:
		// 	return {
		// 		...state,
		// 		smurfs: [...state.smurfs],
		// 		fetchingSmurfs: false,
		// 		error: action.payload.data
		// 	};

		default:
			return state;
	}
};

export default reducer;
