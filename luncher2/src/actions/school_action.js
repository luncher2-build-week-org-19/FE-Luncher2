//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const GET_ALLSCHOOLS_START = 'GET_ALLSCHOOLS_START ';
export const GET_ALLSCHOOLS_SUCCESS = 'GET_ALLSCHOOLS_SUCCESS';
export const GET_ALLSCHOOLS_FAILURE = 'GET_ALLSCHOOLS_FAILURE';

export const DELETE_SCHOOL_START = 'DELETE_SCHOOL_START';
export const DELETE_SCHOOL_SUCCESS = 'DELETE_SCHOOL_SUCCESS';
export const DELETE_SCHOOL_FAILURE = 'DELETE_SCHOOL_FAILURE';

export const ADD_SCHOOL_START = 'ADD_SCHOOL_START';
export const ADD_SCHOOL_SUCCESS = 'ADD_SCHOOL_SUCCESS';
export const ADD_SCHOOL_FAILURE = 'ADD_SCHOOL_FAILURE';

export const GET_SCHOOLDATA_START = 'GET_SCHOOLDATA_START';
export const GET_SCHOOLDATA_SUCCESS = 'GET_SCHOOLDATA_SUCCESS';
export const GET_SCHOOLDATA_FAILURE = 'GET_SCHOOLDATA_FAILURE';

export const GET_SCHOOL_DONATIONS_START = 'GET_SCHOOL_DONATIONS_START';
export const GET_SCHOOL_DONATIONS_SUCCESS = 'GET_SCHOOL_DONATIONS_SUCCESS';
export const GET_SCHOOL_DONATIONS_FAILURE = 'GET_SCHOOL_DONATIONS_FAILURE';

export const SCHOOL_EDIT_START = 'SCHOOL_EDIT_START';
export const SCHOOL_EDIT_SUCCESS = 'SCHOOL_EDIT_SUCCESS';
export const SCHOOL_EDIT_FAILURE = 'SCHOOL_EDIT_FAILURE';

export const getAllSchools = () => dispatch => {
    dispatch({ type: GET_ALLSCHOOLS_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`
    })
        .then(res => {
            dispatch({ type: GET_ALLSCHOOLS_SUCCESS, payload: res });
        })
        .catch(err => dispatch({ type: GET_ALLSCHOOLS_FAILURE, payload: err }));
};

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
            dispatch({ type: GET_ALLSCHOOLS_START });
            axios({
                method: 'get',
                url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`
            })
                .then(res => {
                    dispatch({ type: GET_ALLSCHOOLS_SUCCESS, payload: res });
                })
                .catch(err =>
                    dispatch({ type: GET_ALLSCHOOLS_FAILURE, payload: err })
                );
        })
        .catch(err => dispatch({ type: DELETE_SCHOOL_FAILURE, payload: err }));
};

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
            dispatch({ type: GET_ALLSCHOOLS_START });
            axios({
                method: 'get',
                url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools`
            })
                .then(res => {
                    dispatch({ type: GET_ALLSCHOOLS_SUCCESS, payload: res });
                })
                .catch(err =>
                    dispatch({ type: GET_ALLSCHOOLS_FAILURE, payload: err })
                );
        })
        .catch(err => dispatch({ type: ADD_SCHOOL_FAILURE, payload: err }));
};

export const getSchoolData = id => dispatch => {
    dispatch({ type: GET_SCHOOLDATA_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/${id}`
    })
        .then(res => {
            console.log(res);
            dispatch({ type: GET_SCHOOLDATA_SUCCESS, payload: res.data[0] });
        })
        .catch(err => dispatch({ type: GET_SCHOOLDATA_FAILURE, payload: err }));
};

export const schoolEdit = (userToken, info, id) => dispatch => {
    dispatch({ type: SCHOOL_EDIT_START });
    axios({
        method: 'put',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/update/${id}`,
        headers: {
            Authorization: userToken
        },
        data: { schoolname: info.schoolName, image: info.image }
    })
        .then(res => {
            dispatch({ type: SCHOOL_EDIT_SUCCESS, payload: res });
            dispatch({ type: GET_SCHOOLDATA_START });
            axios({
                method: 'get',
                url: `https://luncher-2-bw-19-lambda.herokuapp.com/schools/${id}`
            })
                .then(res => {
                    dispatch({
                        type: GET_SCHOOLDATA_SUCCESS,
                        payload: res.data[0]
                    });
                })
                .catch(err =>
                    dispatch({ type: GET_SCHOOLDATA_FAILURE, payload: err })
                );
        })
        .catch(err => dispatch({ type: SCHOOL_EDIT_FAILURE, payload: err }));
};
