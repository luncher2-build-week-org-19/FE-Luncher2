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
	GET_SCHOOLDATA_START,
	GET_SCHOOLDATA_SUCCESS,
	GET_SCHOOLDATA_FAILURE,
	SCHOOL_DONATIONS_START,
	SCHOOL_DONATIONS_SUCCESS,
	SCHOOL_DONATIONS_FAILURE,
	SCHOOL_EDIT_START,
	SCHOOL_EDIT_SUCCESS,
	SCHOOL_EDIT_FAILURE,
} from '../actions/';

const initialState = {
	isLoading: false,
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
	schoolData: [],
	schoolDonations: [],
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
				isLoading: true,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				id: action.payload.data[0],
				isLoading: false,
			};
		case REGISTER_FAILURE:
			return {
				...state,
				error: action.payload.message,
				registerRedirect: false,
				isLoading: false,
			};
		//LOGIN
		case LOGIN_START:
			return {
				...state,
				isLoading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,

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
				isLoading: false,

				error: action.payload.data,
			};
		//USERINFO
		case GET_USERINFO_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_USERINFO_SUCCESS:
			console.log('userninfo', action.payload);
			return {
				...state,
				isLoading: false,

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
				isLoading: false,
			};
		//GET ALL SCHOOLS
		case GET_ALLSCHOOLS_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_ALLSCHOOLS_SUCCESS:
			console.log('allSchools', action.payload);
			return {
				...state,
				schools: action.payload.data,
				isLoading: false,
			};
		case GET_ALLSCHOOLS_FAILURE:
			return {
				error: action.payload,
				isLoading: false,
			};
		//DELETE SCHOOL
		case DELETE_SCHOOL_START:
			return {
				...state,
				isLoading: true,
			};
		case DELETE_SCHOOL_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case DELETE_SCHOOL_FAILURE:
			return {
				error: action.payload,
				isLoading: false,
			};
		//ADD SCHOOL
		case ADD_SCHOOL_START:
			return {
				...state,
				isLoading: true,
			};
		case ADD_SCHOOL_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case ADD_SCHOOL_FAILURE:
			return {
				error: action.payload,
				isLoading: false,
			};
		//GET SCHOOL DATA
		case GET_SCHOOLDATA_START:
			return { ...state };
		case GET_SCHOOLDATA_SUCCESS:
			return { ...state, schoolData: action.payload };
		case GET_SCHOOLDATA_FAILURE:
			return { ...state };
		//DONATIONS
		case SCHOOL_DONATIONS_START:
			return { ...state };
		case SCHOOL_DONATIONS_SUCCESS:
			return { ...state, schoolDonations: action.payload };
		case SCHOOL_DONATIONS_FAILURE:
			return { ...state };
		//SCHOOL EDIT
		case SCHOOL_EDIT_START:
			console.log(action.payload);
			return { ...state };
		case SCHOOL_EDIT_SUCCESS:
			return { ...state };
		case SCHOOL_EDIT_FAILURE:
			return { ...state };

		default:
			return state;
	}
};

export default reducer;
