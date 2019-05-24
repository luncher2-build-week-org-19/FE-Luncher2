import axios from 'axios';

export const GET_ALL_DONATED_START = 'GET_ALL_DONATED_START';
export const GET_ALL_DONATED_SUCCESS = 'GET_ALL_DONATED_SUCCESS';
export const GET_ALL_DONATED_FAILURE = 'GET_ALL_DONATED_FAILURE';

export const GET_ALL_DONATED_BY_DONATION_ID_START =
    'GET_ALL_DONATED_BY_DONATION_ID_START';
export const GET_ALL_DONATED_BY_DONATION_ID_SUCCESS =
    'GET_ALL_DONATED_BY_DONATION_ID_SUCCESS';
export const GET_ALL_DONATED_BY_DONATION_ID_FAILURE =
    'GET_ALL_DONATED_BY_DONATION_ID_FAILURE';

export const GET_ALL_DONATED_BY_USER_ID_START =
    'GET_ALL_DONATED_BY_USER_ID_START';
export const GET_ALL_DONATED_BY_USER_ID_SUCCESS =
    'GET_ALL_DONATED_BY_USER_ID_SUCCESS';
export const GET_ALL_DONATED_BY_USER_ID_FAILURE =
    'GET_ALL_DONATED_BY_USER_ID_FAILURE';

export const ADD_DONATED_START = 'ADD_DONATED_START';
export const ADD_DONATED_SUCCESS = 'ADD_DONATED_SUCCESS';
export const ADD_DONATED_FAILURE = 'ADD_DONATED_FAILURE';

//**********************// GET_ALL_DONATED

export const getAllDonated = () => dispatch => {
    dispatch({ type: GET_ALL_DONATED_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/made/all`
    })
        .then(res =>
            dispatch({
                type: GET_ALL_DONATED_SUCCESS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({ type: GET_ALL_DONATED_FAILURE, payload: err })
        );
};

//**********************// GET_ALL_DONATED_BY_DONATION_ID

export const getAllDonatedByDonationId = id => dispatch => {
    dispatch({ type: GET_ALL_DONATED_BY_DONATION_ID_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/made/${id}`
    })
        .then(res =>
            dispatch({
                type: GET_ALL_DONATED_BY_DONATION_ID_SUCCESS,
                payload: res
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ALL_DONATED_BY_DONATION_ID_FAILURE,
                payload: err
            })
        );
};

//**********************// GET_ALL_DONATED_BY_USER_ID

export const getAllDonatedByUserId = id => dispatch => {
    dispatch({ type: GET_ALL_DONATED_BY_USER_ID_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/made/users/${id}`
    })
        .then(res =>
            dispatch({
                type: GET_ALL_DONATED_BY_USER_ID_SUCCESS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({ type: GET_ALL_DONATED_BY_USER_ID_FAILURE, payload: err })
        );
};

//**********************// ADD_DONATED

export const addDonated = (userToken, id) => dispatch => {
    dispatch({ type: ADD_DONATED_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/donations/made/${id}`,
        headers: {
            Authorization: userToken
        }
    })
        .then(res =>
            dispatch({
                type: ADD_DONATED_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: ADD_DONATED_FAILURE, payload: err }));
};
