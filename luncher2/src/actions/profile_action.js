//  C - addUser
//  R - getUser
//  U - updateUser
//  D - deleteUser

import axios from 'axios';

export const EDIT_USER_START = 'EDIT_USER_FAILURE ';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_FAILURE ';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const editUser = (userToken, user) => dispatch => {
	dispatch({ type: EDIT_USER_START });
	axios({
		method: 'put',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/update`,
		headers: {
			Authorization: userToken,
		},
		data: {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
		},
	})
		.then(
			res => (
				{ type: EDIT_USER_SUCCESS, payload: res },
				window.location.reload()
			)
		)
		.catch(err => ({ type: EDIT_USER_FAILURE, payload: err }));
};

export const deleteUser = userToken => dispatch => {
	dispatch({ type: DELETE_USER_START });
	axios({
		method: 'delete',
		url: `https://luncher-2-bw-19-lambda.herokuapp.com/users/delete/`,
		headers: {
			Authorization: userToken,
		},
	})
		.then(res => {
			console.log('delete success', res);
			dispatch(
				{ type: DELETE_USER_SUCCESS, payload: res },
				localStorage.removeItem('userToken'),
				window.location.reload()
			);
		})
		.catch(err => dispatch({ type: DELETE_USER_FAILURE, payload: err }));
};
