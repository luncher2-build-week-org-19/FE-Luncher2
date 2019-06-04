import axios from 'axios';

// export const START = 'START'
// export const SUCCESS = 'SUCCESS'
// export const FAILURE = 'FAILURE'

export const REGISTER_START = 'REGISTER_START ';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START ';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_ALL_USERS_START = 'GET_ALL_USERS_START';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const GET_USER_BY_ID_START = 'GET_USER_BY_ID_START';
export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE';

export const GET_USER_INFO_START = 'GET_USER_INFO_START';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

//**********************// REGISTER

export const register = user => dispatch => {
    dispatch({ type: REGISTER_START });
    axios({
        method: 'post',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/register`,
        data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            userRole: user.userRole,
            userName: user.userName
        }
    })
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res });
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err }));
};

//**********************// LOGIN

export const login = user => dispatch => {
    dispatch({ type: LOGIN_START });
    axios({
        method: 'post',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/login`,
        data: {
            password: user.password,
            userName: user.userName
        }
    })
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('userToken', res.data.token);
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.data }));
};

//**********************// GET ALL USERS

export const getAllUsers = () => dispatch => {
    dispatch({ type: GET_ALL_USERS_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/all`
    })
        .then(res => {
            dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_ALL_USERS_FAILURE, payload: err }));
};

//**********************// GET USER BY ID

export const getUserByID = id => dispatch => {
    dispatch({ type: GET_USER_BY_ID_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/${id}`
    })
        .then(res => {
            dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_USER_BY_ID_FAILURE, payload: err }));
};

//**********************// GET USER INFO

export const getUserInfo = userToken => dispatch => {
    dispatch({ type: GET_USER_INFO_START });
    axios({
        method: 'get',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/info`,
        headers: {
            Authorization: userToken
        }
    })
        .then(res => {
            dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data[0] });
        })
        .catch(err => dispatch({ type: GET_USER_INFO_FAILURE, payload: err }));
};

//**********************// DELETE USER

export const deleteUser = userToken => dispatch => {
    dispatch({ type: DELETE_USER_START });
    axios({
        method: 'delete',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/delete/`,
        headers: {
            Authorization: userToken
        }
    })
        .then(res => {
            dispatch(
                { type: DELETE_USER_SUCCESS, payload: res },
                localStorage.removeItem('userToken')
            );
        })
        .catch(err => dispatch({ type: DELETE_USER_FAILURE, payload: err }));
};
//**********************// UPDATE USER

export const updateUser = (userToken, user, id) => dispatch => {
    dispatch({ type: UPDATE_USER_START });
    axios({
        method: 'put',
        url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/update`,
        headers: {
            Authorization: userToken
        },
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
    })
        .then(res => {
            dispatch({ type: GET_USER_BY_ID_START, id: id });
            dispatch({ type: UPDATE_USER_SUCCESS, payload: res });
        })
        .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err }));
};
