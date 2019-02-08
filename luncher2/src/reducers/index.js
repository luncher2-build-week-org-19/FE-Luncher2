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
	GET_SCHOOL_DONATIONS_START,
	GET_SCHOOL_DONATIONS_SUCCESS,
	GET_SCHOOL_DONATIONS_FAILURE,
	GET_SCHOOL_DONATIONS_START_2,
	GET_SCHOOL_DONATIONS_SUCCESS_2,
	GET_SCHOOL_DONATIONS_FAILURE_2,
	SCHOOL_EDIT_START,
	SCHOOL_EDIT_SUCCESS,
	SCHOOL_EDIT_FAILURE,
	USER_DONATIONS_START,
	USER_DONATIONS_SUCCESS,
	USER_DONATIONS_FAILURE,
	ADD_DONATION_START,
	ADD_DONATION_SUCCESS,
	ADD_DONATION_FAILURE,
	DELETE_DONATION_START,
	DELETE_DONATION_SUCCESS,
	DELETE_DONATION_FAILURE,
	EDIT_DONATION_START,
	EDIT_DONATION_SUCCESS,
	EDIT_DONATION_FAILURE,
	GET_ALL_DONATIONS_SCHOOL_START,
	GET_ALL_DONATIONS_SCHOOL_SUCCESS,
	GET_ALL_DONATIONS_SCHOOL_FAILURE,
	EDIT_USER_START,
	EDIT_USER_SUCCESS,
	EDIT_USER_FAILURE,
} from '../actions/';

const initialState = {
	isLoading: false,
	//user data
	user: [],
	isEditingUser: false,
	firstName: '',
	lastName: '',
	userRole: '',
	userName: '',
	email: '',
	password: '',
	id: '',
	token: '',
	// registerRedirect: false,
	//school data
	schools: [],
	schoolData: [],
	schoolEdit: '',
	isSchoolEditing: false,
	schoolAdded: [],

	//donation data
	schoolDonations: [],
	isEditingDonation: false,
	getAllSchoolIsLoading: false,
	donationsByUser: [],
	//ERRORS
	deleteError: '',
	editError: '',
	loginError: '',
	registerError: '',
	userInfoError: '',
	//componentDidUpdate booleans
	getAllSchoolIsUpdating: false,
	schoolDonationsIsUpdating: false,
	schoolDonationsIsDeleting: false,
	//Donations
	totalDonationsBySchool: '',
};

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
				registerError: action.payload.message,
				isLoading: false,
			};
		//LOGIN
		case LOGIN_START:
			return {
				...state,
				loginIsLoading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginIsLoading: false,
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
				loginIsLoading: false,
				loginError: action.payload.message,
			};
		//USERINFO
		case GET_USERINFO_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_USERINFO_SUCCESS:
			return {
				...state,
				user: action.payload.data[0],
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
				userInfoError: action.payload.response.data.message,
				isLoading: false,
			};
		//GET ALL SCHOOLS
		case GET_ALLSCHOOLS_START:
			return {
				...state,
				getAllSchoolIsLoading: true,
			};
		case GET_ALLSCHOOLS_SUCCESS:
			return {
				...state,
				schools: action.payload.data,
				getAllSchoolIsLoading: false,
				getAllSchoolIsUpdating: false,
			};
		case GET_ALLSCHOOLS_FAILURE:
			return {
				error: action.payload,
				getAllSchoolIsLoading: false,
				getAllSchoolIsUpdating: false,
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
				schoolAdded: [],
				// isLoading: true,
			};
		case ADD_SCHOOL_SUCCESS:
			return {
				...state,
				schoolAdded: [...state.schoolAdded, action.payload],
				getAllSchoolIsUpdating: true,
			};
		case ADD_SCHOOL_FAILURE:
			return {
				error: action.payload,
				isLoading: false,
				schoolAdded: [],
			};
		//GET SCHOOL DATA
		case GET_SCHOOLDATA_START:
			return { ...state };
		case GET_SCHOOLDATA_SUCCESS:
			return {
				...state,
				schoolData: action.payload,
				schoolDonationsIsUpdating: false,
				schoolDonationsIsDeleting: false,
			};
		case GET_SCHOOLDATA_FAILURE:
			return {
				...state,
				schoolDonationsIsUpdating: false,
				schoolDonationsIsDeleting: false,
			};
		//DONATIONS
		case GET_SCHOOL_DONATIONS_START:
			return { ...state, schoolDonations: [] };
		case GET_SCHOOL_DONATIONS_SUCCESS:
			return {
				...state,
				schoolDonations: action.payload,
				schoolDonationsIsUpdating: false,
			};
		case GET_SCHOOL_DONATIONS_FAILURE:
			return {
				...state,
				schoolDonations: [],
				schoolDonationsIsUpdating: false,
				schoolInfoIsUpdating: false,
			};
		//DONATIONS_2
		case GET_SCHOOL_DONATIONS_START_2:
			return { ...state };
		case GET_SCHOOL_DONATIONS_SUCCESS_2:
			return {
				...state,
				schoolDonations: action.payload,
				schoolDonationsIsUpdating: false,
			};
		case GET_SCHOOL_DONATIONS_FAILURE_2:
			return { ...state, schoolDonationsIsUpdating: false, schoolInfoIsUpdating: false };

		//SCHOOL EDIT
		case SCHOOL_EDIT_START:
			return {
				...state,
				isSchoolEditing: true,
			};
		case SCHOOL_EDIT_SUCCESS:
			return {
				...state,
				isSchoolEditing: false,
				schoolData: action.payload,
			};
		case SCHOOL_EDIT_FAILURE:
			return { ...state, schoolData: '', schoolInfoIsUpdating: false };
		//donationByUser
		case USER_DONATIONS_START:
			return { ...state };
		case USER_DONATIONS_SUCCESS:
			return { ...state, donationsByUser: action.payload.data };
		case USER_DONATIONS_FAILURE:
			return { ...state };
		//Add Donation
		case ADD_DONATION_START:
			return { ...state, schoolDonationsIsUpdating: false };
		case ADD_DONATION_SUCCESS:
			return {
				...state,
				schoolDonationsIsUpdating: true,
				schoolDonations: [...state.schoolDonations, action.payload],
			};
		case ADD_DONATION_FAILURE:
			return { ...state, schoolDonationsIsUpdating: false };
		//Delete Donation
		case DELETE_DONATION_START:
			return { ...state, deleteError: '' };
		case DELETE_DONATION_SUCCESS:
			return {
				...state,
				schoolDonationsIsDeleting: true,
				deleteError: '',
				schoolDonations: [...state.schoolDonations, action.payload],
			};
		case DELETE_DONATION_FAILURE:
			return {
				...state,
				schoolDonationsIsDeleting: false,
				deleteError: action.payload.message,
			};
		//Delete Donation
		case EDIT_DONATION_START:
			return { ...state, deleteError: '', editError: '', isEditingDonation: true };
		case EDIT_DONATION_SUCCESS:
			return {
				...state,
				editError: '',
				isEditingDonation: false,
			};
		case EDIT_DONATION_FAILURE:
			return {
				...state,
				editError: action.payload.message,
				isEditingDonation: false,
			};
		//get all donations by school id
		case GET_ALL_DONATIONS_SCHOOL_START:
			return {
				...state,
			};
		case GET_ALL_DONATIONS_SCHOOL_SUCCESS:
			console.group(action.payload);
			return {
				...state,
				totalDonationsBySchool: action.payload.data.totalReceived,
			};
		case GET_ALL_DONATIONS_SCHOOL_FAILURE:
			return {
				...state,
			};
		//EDIT USER
		case EDIT_USER_START:
			return {
				...state,
				user: [action.payload],

				isEditingUser: true,
			};
		case EDIT_USER_SUCCESS:
			return {
				...state,
				isEditingUser: false,
			};
		case EDIT_USER_FAILURE:
			return {
				...state,
				isEditingUser: false,
			};

		default:
			return state;
	}
};

export default reducer;
