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
    UPDATE_DONATION_START,
    UPDATE_DONATION_SUCCESS,
    UPDATE_DONATION_FAILURE,
    DELETE_DONATION_START,
    DELETE_DONATION_SUCCESS,
    DELETE_DONATION_FAILURE
} from '../actions/_donation_needs';

const initialState = {
    allDonations: [],
    donationById: [],
    donationsByUserId: [],
    donationsbySchoolId: [],
    //isLoading
    isLoading_GetAllDonations: false,
    isLoading_GetDonationById: false,
    isLoading_GetDonationsByUserId: false,
    isLoading_GetDonationsBySchoolId: false,
    isLoading_AddNewDonation: false,
    isLoading_UpdateDonation: false,
    isLoading_DeleteDonation: false,
    //Error
    error_GetAllDonations: '',
    error_GetDonationById: '',
    error_GetDonationsByUserId: '',
    error_GetDonationsBySchoolId: '',
    error_AddNewDonation: '',
    error_UpdateDonation: '',
    error_DeleteDonation: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //**********************// GET ALL DONATIONS
        case GET_ALL_DONATIONS_START:
            return {
                ...state,
                allDonations: [],
                isLoading_GetAllDonations: true
            };
        case GET_ALL_DONATIONS_SUCCESS:
            return {
                ...state,
                allDonations: action.payload,
                isLoading_GetAllDonations: false
            };
        case GET_ALL_DONATIONS_FAILURE:
            return {
                ...state,
                isLoading_GetAllDonations: false,
                error_GetAllDonations: action.payload
            };
        //**********************// GET DONATION BY ID
        case GET_DONATION_BY_ID_START:
            return {
                ...state,
                donationById: [],
                isLoading_GetDonationById: true,
                error_GetDonationById: ''
            };
        case GET_DONATION_BY_ID_SUCCESS:
            return {
                ...state,
                donationById: action.payload,
                isLoading_GetDonationById: false,
                error_GetDonationById: ''
            };
        case GET_DONATION_BY_ID_FAILURE:
            return {
                ...state,
                isLoading_GetDonationById: false,
                error_GetDonationById: action.payload
            };
        //**********************// GET DONATIONS BY USER ID
        case GET_DONATIONS_BY_USER_ID_START:
            return {
                ...state,
                donationsByUserId: [],
                isLoading_GetDonationsByUserId: true,
                error_GetDonationsByUserId: ''
            };
        case GET_DONATIONS_BY_USER_ID_SUCCESS:
            return {
                ...state,
                donationsByUserId: action.payload,
                isLoading_GetDonationsByUserId: false,
                error_GetDonationsByUserId: ''
            };
        case GET_DONATIONS_BY_USER_ID_FAILURE:
            return {
                ...state,
                isLoading_GetDonationsByUserId: false,
                error_GetDonationsByUserId: action.payload
            };
        //**********************// GET DONATIONS BY SCHOOL ID
        case GET_DONATIONS_BY_SCHOOL_ID_START:
            return {
                ...state,
                // donationsbySchoolId: [],
                isLoading_GetDonationsBySchoolId: true,
                error_GetDonationsBySchoolId: ''
            };
        case GET_DONATIONS_BY_SCHOOL_ID_SUCCESS:
            return {
                ...state,
                donationsbySchoolId: action.payload,
                isLoading_GetDonationsBySchoolId: false,
                error_GetDonationsBySchoolId: ''
            };
        case GET_DONATIONS_BY_SCHOOL_ID_FAILURE:
            return {
                ...state,
                isLoading_GetDonationsBySchoolId: false,
                error_GetDonationsBySchoolId: action.payload
            };
        //**********************// ADD NEW DONATION
        case ADD_NEW_DONATION_START:
            return {
                ...state,
                isLoading_AddNewDonation: true,
                error_AddNewDonation: ''
            };
        case ADD_NEW_DONATION_SUCCESS:
            return {
                ...state,
                isLoading_AddNewDonation: false,
                error_AddNewDonation: ''
            };
        case ADD_NEW_DONATION_FAILURE:
            return {
                ...state,
                isLoading_AddNewDonation: false,
                error_AddNewDonation: action.payload
            };
        //**********************// UPDATE DONATION
        case UPDATE_DONATION_START:
            return {
                ...state,
                isLoading_UpdateDonation: true,
                error_UpdateDonation: ''
            };
        case UPDATE_DONATION_SUCCESS:
            return {
                ...state,
                isLoading_UpdateDonation: false,
                error_UpdateDonation: ''
            };
        case UPDATE_DONATION_FAILURE:
            return {
                ...state,
                isLoading_UpdateDonation: false,
                error_UpdateDonation: action.payload
            };
        //**********************// DELETE DONATION
        case DELETE_DONATION_START:
            return {
                ...state,
                isLoading_DeleteDonation: true,
                error_DeleteDonation: ''
            };
        case DELETE_DONATION_SUCCESS:
            return {
                ...state,
                isLoading_DeleteDonation: false,
                error_DeleteDonation: ''
            };
        case DELETE_DONATION_FAILURE:
            return {
                ...state,
                isLoading_DeleteDonation: false,
                error_DeleteDonation: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
