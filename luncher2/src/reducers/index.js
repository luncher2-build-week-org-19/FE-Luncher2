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
	GET_ALLSCHOOLS_START,
	GET_ALLSCHOOLS_SUCCESS,
	GET_ALLSCHOOLS_FAILURE,
	DELETE_SCHOOL_START,
	DELETE_SCHOOL_SUCCESS,
	DELETE_SCHOOL_FAILURE,
	ADD_SCHOOL_START,
	ADD_SCHOOL_SUCCESS,
	ADD_SCHOOL_FAILURE,
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
	schools: [],
};
// import { combineReducers } from 'redux';
// import login from './login';

// export default combineReducers({
// 	login
// });

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// REGISTER
		case REGISTER_START:
			return {
				...state,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				id: action.payload.data[0],
			};
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload.message,
				registerRedirect: false,
			};
		//LOGIN
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
		//USERINFO
		case GET_USERINFO_START:
			return {
				...state,
			};
		case GET_USERINFO_SUCCESS:
			console.log('userninfo', action.payload);
			return {
				...state,
				id: action.payload.id,
				username: action.payload.data[0].username,
				email: action.payload.data[0].email,
				firstName: action.payload.data[0].firstName,
				lastName: action.payload.data[0].lastName,
				userRole: action.payload.data[0].userRole,
			};
		case GET_USERINFO_FAILURE:
			return {
				error: action.payload,
			};
		//GET ALL SCHOOLS
		case GET_ALLSCHOOLS_START:
			return {
				...state,
			};
		case GET_ALLSCHOOLS_SUCCESS:
			console.log('allSchools', action.payload);
			return {
				...state,
				schools: action.payload.data,
			};
		case GET_ALLSCHOOLS_FAILURE:
			return {
				error: action.payload,
			};
		//DELETE SCHOOL
		case DELETE_SCHOOL_START:
			return {
				...state,
			};
		case DELETE_SCHOOL_SUCCESS:
			return {
				...state,
			};
		case DELETE_SCHOOL_FAILURE:
			return {
				error: action.payload,
			};
		//ADD SCHOOL
		case ADD_SCHOOL_START:
			return {
				...state,
			};
		case ADD_SCHOOL_SUCCESS:
			return {
				...state,
			};
		case ADD_SCHOOL_FAILURE:
			return {
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
