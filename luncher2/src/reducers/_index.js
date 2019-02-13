import { combineReducers } from 'redux';
import _users from './_users';
import _schools from './schools';
import _donation_needs from './_donation_needs';
import _donations_received from './_donations_received';

export default combineReducers({
	_users,
	_schools,
	_donation_needs,
	_donations_received,
});
