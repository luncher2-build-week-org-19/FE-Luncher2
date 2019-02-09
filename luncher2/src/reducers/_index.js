import { combineReducers } from 'redux';
import _users from './_users';
import _schools from './schools';

export default combineReducers({
	_users,
	_schools,
});
