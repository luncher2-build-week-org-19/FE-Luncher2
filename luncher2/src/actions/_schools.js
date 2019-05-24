import axios from 'axios';

// export const START = 'START'
// export const SUCCESS = 'SUCCESS'
// export const FAILURE = 'FAILURE'

export const GET_ALL_SCHOOLS_START = 'GET_ALL_SCHOOLS_START';
export const GET_ALL_SCHOOLS_SUCCESS = 'GET_ALL_SCHOOLS_SUCCESS';
export const GET_ALL_SCHOOLS_FAILURE = 'GET_ALL_SCHOOLS_FAILURE';

export const GET_SCHOOL_BY_ID_START = 'GET_SCHOOL_BY_ID_START';
export const GET_SCHOOL_BY_ID_SUCCESS = 'GET_SCHOOL_BY_ID_SUCCESS';
export const GET_SCHOOL_BY_ID_FAILURE = 'GET_SCHOOL_BY_ID_FAILURE';

export const GET_SCHOOLS_BY_USER_ID_START = 'GET_SCHOOLS_BY_USER_ID_START';
export const GET_SCHOOLS_BY_USER_ID_SUCCESS = 'GET_SCHOOLS_BY_USER_ID_SUCCESS';
export const GET_SCHOOLS_BY_USER_ID_FAILURE = 'GET_SCHOOLS_BY_USER_ID_FAILURE';

export const ADD_SCHOOL_START = 'ADD_SCHOOL_START';
export const ADD_SCHOOL_SUCCESS = 'ADD_SCHOOL_SUCCESS';
export const ADD_SCHOOL_FAILURE = 'ADD_SCHOOL_FAILURE';

export const UPDATE_SCHOOL_START = 'UPDATE_SCHOOL_START';
export const UPDATE_SCHOOL_SUCCESS = 'UPDATE_SCHOOL_SUCCESS';
export const UPDATE_SCHOOL_FAILURE = 'UPDATE_SCHOOL_FAILURE';

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILURE = 'DELETE_SCHOOL_FAILURE';

//**********************// GET ALL SCHOOLS

export const getAllSchools = () => dispatch => {
    dispatch({ type: GET_ALL_SCHOOLS_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`
    })
        .then(res => {
            dispatch({ type: GET_ALL_SCHOOLS_SUCCESS, payload: res });
        })
        .catch(err =>
            dispatch({ type: GET_ALL_SCHOOLS_FAILURE, payload: err })
        );
};

//**********************// GET SCHOOL BY ID

export const getSchoolById = schoolID => dispatch => {
    dispatch({ type: GET_SCHOOL_BY_ID_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/${schoolID}`
    })
        .then(res => {
            dispatch({ type: GET_SCHOOL_BY_ID_SUCCESS, payload: res.data[0] });
        })
        .catch(err =>
            dispatch({ type: GET_SCHOOL_BY_ID_FAILURE, payload: err })
        );
};

//**********************// GET SCHOOLS BY USER ID

export const getSchoolByUserId = userId => dispatch => {
    dispatch({ type: GET_SCHOOLS_BY_USER_ID_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/user/${userId}`
    })
        .then(res => {
            dispatch({
                type: GET_SCHOOLS_BY_USER_ID_SUCCESS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch({ type: GET_SCHOOLS_BY_USER_ID_FAILURE, payload: err })
        );
};

//**********************// ADD SCHOOL

export const addSchool = (userToken, school) => dispatch => {
    dispatch({ type: ADD_SCHOOL_START });
    axios({
        method: 'post',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/`,
        headers: {
            Authorization: userToken
        },
        data: {
            image: school.image,
            schoolname: school.schoolname
        }
    })
        .then(res => {
            dispatch({ type: ADD_SCHOOL_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: ADD_SCHOOL_FAILURE, payload: err }));
};

//**********************// UPDATE SCHOOL

export const updateSchool = (userToken, school, schoolID) => dispatch => {
    dispatch({ type: UPDATE_SCHOOL_START });
    axios({
        method: 'put',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/update/${schoolID}`,
        headers: {
            Authorization: userToken
        },
        data: {
            schoolname: school.schoolName,
            image: school.image
        }
    })
        .then(res => {
            dispatch({ type: UPDATE_SCHOOL_SUCCESS, payload: res });
        })
        .catch(err => dispatch({ type: UPDATE_SCHOOL_FAILURE, payload: err }));
};

//**********************// DELETE SCHOOL

export const deleteSchool = (userToken, schoolID) => dispatch => {
    dispatch({ type: DELETE_SCHOOL_START });
    axios({
        method: 'delete',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/delete/${schoolID}`,
        headers: {
            Authorization: userToken
        }
    })
        .then(res => {
            dispatch({ type: DELETE_SCHOOL_SUCCESS, payload: res });
        })
        .catch(err => dispatch({ type: DELETE_SCHOOL_FAILURE, payload: err }));
};
