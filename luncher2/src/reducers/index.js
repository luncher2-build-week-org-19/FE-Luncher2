import {
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	GET_USERINFO_START,
	GET_USERINFO_SUCCESS,
	GET_USERINFO_FAILURE,
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
	user: {
		id: '',
		username: '',
		role: '',
	},
	registerRedirect: false,
};
// import { combineReducers } from 'redux';
// import login from './login';

// export default combineReducers({
// 	login
// });

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_START:
			return {
				...state,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				id: action.payload.data[0],
				registerRedirect: true,
			};
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload.message,
				registerRedirect: false,
			};

		case LOGIN_START:
			return {
				...state,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.data,
				user: {
					id: action.payload.data.user.id,
					username: action.payload.data.user.username,
					role: action.payload.data.user.role,
				},
			};
		case LOGIN_FAILURE:
			return {
				...state,
				error: action.payload.data,
			};

		case GET_USERINFO_START:
			return {
				...state,
			};
		case GET_USERINFO_SUCCESS:
			console.log('userninfo', action.payload);
			return {
				...state,
				id: action.payload.id,
				username: action.payload.username,
				email: action.payload.email,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
				userRole: action.payload.useRole,
			};
		case GET_USERINFO_FAILURE:
			return {
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
