import {
	GET_ALL_SCHOOLS_START,
	GET_ALL_SCHOOLS_SUCCESS,
	GET_ALL_SCHOOLS_FAILURE,
	GET_SCHOOL_BY_ID_START,
	GET_SCHOOL_BY_ID_SUCCESS,
	GET_SCHOOL_BY_ID_FAILURE,
} from '../actions/_schools';

const initialState = {
	allSchools: [],
	schoolById: [],
	//isLoading
	isLoading_GetAllSchools: false,
	isLoading_GetSchoolById: false,

	//errors
	error_GetAllSchools: '',
	error_GetSchoolById: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//**********************// GET ALL SCHOOLS
		case GET_ALL_SCHOOLS_START:
			return {
				...state,
				allSchools: [],
				isLoading_GetAllSchools: false,
				error_GetAllSchools: [],
			};
		case GET_ALL_SCHOOLS_SUCCESS:
			return {
				...state,
				allSchools: action.payload,
				isLoading_GetAllSchools: true,
				error_GetAllSchools: '',
			};
		case GET_ALL_SCHOOLS_FAILURE:
			return {
				...state,
				allSchools: '',
				isLoading_GetAllSchools: false,
				error_GetAllSchools: action.payload,
			};
		//**********************// GET ALL SCHOOLS BY ID
		case GET_SCHOOL_BY_ID_START:
			return {
				...state,
				schoolById: '',
				isLoading_GetSchoolById: false,
				error_GetSchoolById: [],
			};
		case GET_SCHOOL_BY_ID_SUCCESS:
			return {
				...state,
				schoolById: action.payload,
				isLoading_GetSchoolById: true,
				error_GetSchoolById: '',
			};
		case GET_SCHOOL_BY_ID_FAILURE:
			return {
				...state,
				schoolById: '',
				isLoading_GetSchoolById: false,
				error_GetSchoolById: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
