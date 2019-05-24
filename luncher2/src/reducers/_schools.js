import {
    GET_ALL_SCHOOLS_START,
    GET_ALL_SCHOOLS_SUCCESS,
    GET_ALL_SCHOOLS_FAILURE,
    GET_SCHOOL_BY_ID_START,
    GET_SCHOOL_BY_ID_SUCCESS,
    GET_SCHOOL_BY_ID_FAILURE,
    GET_SCHOOLS_BY_USER_ID_START,
    GET_SCHOOLS_BY_USER_ID_SUCCESS,
    GET_SCHOOLS_BY_USER_ID_FAILURE,
    ADD_SCHOOL_START,
    ADD_SCHOOL_SUCCESS,
    ADD_SCHOOL_FAILURE,
    UPDATE_SCHOOL_START,
    UPDATE_SCHOOL_SUCCESS,
    UPDATE_SCHOOL_FAILURE,
    DELETE_SCHOOL_START,
    DELETE_SCHOOL_SUCCESS,
    DELETE_SCHOOL_FAILURE
} from '../actions/_schools';

const initialState = {
    allSchools: [],
    schoolById: '',
    schoolsByUserId: [],
    //isLoading
    isLoading_GetAllSchools: false,
    isLoading_GetSchoolById: false,
    isLoading_GetSchoolsByUserId: false,
    isLoading_AddSchool: false,
    isLoading_UpdateSchool: false,
    isLoading_DeleteSchool: false,

    //errors
    error_GetAllSchools: '',
    error_GetSchoolById: '',
    error_GetSschoolsByUserId: '',
    error_AddSchool: '',
    error_UpdateSchool: '',
    error_DeleteSchool: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //**********************// GET ALL SCHOOLS
        case GET_ALL_SCHOOLS_START:
            return {
                ...state,
                allSchools: [],
                isLoading_GetAllSchools: true,
                error_GetAllSchools: []
            };
        case GET_ALL_SCHOOLS_SUCCESS:
            return {
                ...state,
                allSchools: action.payload.data,
                isLoading_GetAllSchools: false,
                error_GetAllSchools: ''
            };
        case GET_ALL_SCHOOLS_FAILURE:
            return {
                ...state,
                allSchools: '',
                isLoading_GetAllSchools: false,
                error_GetAllSchools: action.payload
            };
        //**********************// GET ALL SCHOOLS BY ID
        case GET_SCHOOL_BY_ID_START:
            return {
                ...state,
                schoolById: '',
                isLoading_GetSchoolById: true,
                error_GetSchoolById: []
            };
        case GET_SCHOOL_BY_ID_SUCCESS:
            return {
                ...state,
                schoolById: action.payload,
                isLoading_GetSchoolById: false,
                error_GetSchoolById: ''
            };
        case GET_SCHOOL_BY_ID_FAILURE:
            return {
                ...state,
                schoolById: '',
                isLoading_GetSchoolById: false,
                error_GetSchoolById: action.payload
            };
        //**********************// GET SCHOOLS BY USER ID
        case GET_SCHOOLS_BY_USER_ID_START:
            return {
                ...state,
                schoolsByUserId: '',
                isLoading_GetSchoolsByUserId: true,
                error_GetSschoolsByUserId: ''
            };
        case GET_SCHOOLS_BY_USER_ID_SUCCESS:
            return {
                ...state,
                schoolsByUserId: action.payload,
                isLoading_GetSchoolsByUserId: false,
                error_GetSschoolsByUserId: ''
            };
        case GET_SCHOOLS_BY_USER_ID_FAILURE:
            return {
                ...state,
                schoolsByUserId: '',
                isLoading_GetSchoolsByUserId: false,
                error_GetSschoolsByUserId: action.payload
            };
        //**********************// ADD SCHOOL
        case ADD_SCHOOL_START:
            return {
                ...state,
                isLoading_AddSchool: true,
                error_AddSchool: ''
            };
        case ADD_SCHOOL_SUCCESS:
            return {
                ...state,
                isLoading_AddSchool: false,
                error_AddSchool: ''
            };
        case ADD_SCHOOL_FAILURE:
            return {
                ...state,
                isLoading_AddSchool: false,
                error_AddSchool: action.payload
            };

        //**********************// GET SCHOOLS BY USER ID
        case UPDATE_SCHOOL_START:
            return {
                ...state,
                isLoading_UpdateSchool: true,
                error_UpdateSchool: ''
            };
        case UPDATE_SCHOOL_SUCCESS:
            return {
                ...state,
                isLoading_UpdateSchool: false,
                error_UpdateSchool: ''
            };
        case UPDATE_SCHOOL_FAILURE:
            return {
                ...state,
                isLoading_UpdateSchool: false,
                error_UpdateSchool: action.payload
            };

        //**********************// GET SCHOOLS BY USER ID
        case DELETE_SCHOOL_START:
            return {
                ...state,
                isLoading_DeleteSchool: true,
                error_DeleteSchool: []
            };
        case DELETE_SCHOOL_SUCCESS:
            return {
                ...state,
                isLoading_DeleteSchool: false,
                error_DeleteSchool: ''
            };
        case DELETE_SCHOOL_FAILURE:
            return {
                ...state,
                isLoading_DeleteSchool: false,
                error_DeleteSchool: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
