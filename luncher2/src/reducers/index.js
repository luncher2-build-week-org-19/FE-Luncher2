import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../actions/';

const initialState = {
	firstName: '',
	lastName: '',
	userRole: '',
	userName: '',
	email: '',
	password: '',
	id: '',
	token: '',
	registerRedirect: false
};
// import { combineReducers } from 'redux';
// import login from './login';

// export default combineReducers({
// 	login
// });

const reducer = (state = initialState, action) => {
	console.log('reducer', action.payload);
	switch (action.type) {
		case REGISTER_START:
			return {
				...state
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				id: action.payload.data[0],
				registerRedirect: true
			};
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload.response.data.error,
				registerRedirect: false
			};

		case LOGIN_START:
			return {
				...state
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.data
			};
		case LOGIN_FAILURE:
			return {
				...state,
				error: action.payload.data
			};

		default:
			return state;
	}
};

export default reducer;
