import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_ALL_USERS_START,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
    GET_USER_BY_ID_START,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    GET_USER_INFO_START,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../actions/_users';

const initialState = {
    allUsers: [],
    getUserByID: '',
    loggedInUser: {
        token: '',
        id: '',
        firstName: '',
        lastName: '',
        userRole: '',
        username: '',
        email: '',
        password: ''
    },

    //isLoading
    isLoading_Register: false,
    isLoading_Login: false,
    isLoading_GetAllUsers: false,
    isLoading_GetUserByID: false,
    isLoading_GetUserInfo: false,
    isLoading_DeleteUser: false,
    isLoading_UpdateUser: false,

    //errors
    error_Register: '',
    error_Login: '',
    error_GetAllUsers: '',
    error_GetUserByID: '',
    error_getUserInfo: '',
    error_deleteUser: '',
    error_updateUser: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //**********************// REGISTER
        case REGISTER_START:
            return {
                ...state,
                isLoading_Register: false,
                error_Register: ''
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading_Register: true,
                error_Register: ''
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading_Register: false,
                error_Register: action.payload
            };
        //**********************// LOGIN
        case LOGIN_START:
            return {
                ...state,
                isLoading_Login: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading_Login: true,
                loggedInUser: {
                    token: action.payload.token,
                    id: action.payload.id,
                    userRole: action.payload.role,
                    username: action.payload.username
                },
                error_Login: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading_Login: false,
                loggedInUser: '',
                error_Login: action.payload
            };
        //**********************// GET ALL USERS
        case GET_ALL_USERS_START:
            return {
                ...state,
                isLoading_GetAllUsers: true
            };
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading_GetAllUsers: false,
                allUsers: action.payload,
                error_GetAllUsers: ''
            };
        case GET_ALL_USERS_FAILURE:
            return {
                ...state,
                isLoading_GetAllUsers: false,

                allUsers: '',
                error_GetAllUsers: action.payload
            };
        //**********************// GET USER BY ID
        case GET_USER_BY_ID_START:
            return {
                ...state,
                isLoading_GetUserByID: true,
                getUserByID: '',
                error_GetUserByID: ''
            };
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading_GetUserByID: false,
                getUserByID: action.payload,
                error_GetUserByID: ''
            };
        case GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                isLoading_GetUserByID: false,
                getUserByID: '',
                error_GetUserByID: action.payload
            };

        //**********************// GET USER BY ID
        case GET_USER_INFO_START:
            return {
                ...state,
                isLoading_GetUserInfo: true,
                getUserByID: '',
                error_getUserInfo: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading_GetUserInfo: false,
                getUserByID: action.payload,
                error_getUserInfo: ''
            };
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                isLoading_GetUserInfo: false,
                loggedInUser: {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    userRole: action.payload.role,
                    username: action.payload.username,
                    email: action.payload.email
                },
                error_getUserInfo: action.payload
            };
        //**********************// GET USER BY ID
        case DELETE_USER_START:
            return {
                ...state,
                isLoading_DeleteUser: true,
                error_deleteUser: ''
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading_DeleteUser: false,
                error_deleteUser: '',
                loggedInUser: {
                    token: '',
                    id: '',
                    firstName: '',
                    lastName: '',
                    userRole: '',
                    username: '',
                    email: '',
                    password: ''
                }
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                isLoading_DeleteUser: true,
                error_deleteUser: action.payload
            };
        //**********************// UPDATE USER
        case UPDATE_USER_START:
            return {
                ...state,
                isLoading_UpdateUser: true,
                error_updateUser: ''
            };
        case UPDATE_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                isLoading_UpdateUser: false,
                error_updateUser: '',
                loggedInUser: {
                    token: '',
                    id: '',
                    firstName: '',
                    lastName: '',
                    userRole: '',
                    username: '',
                    email: '',
                    password: ''
                }
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading_UpdateUser: true,
                error_updateUser: action.payload
            };
        //**********************// Default state
        default:
            return state;
    }
};

export default reducer;
