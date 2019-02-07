import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import SchoolData from './components/school/SchoolData';
import authenticateHOC from './components/authentication/Authenticate';
import Navigation from './components/navBar/Navigation';
import { getUserInfo } from './actions';
//styles

import './App.css';
import Profile from './components/profile/Profile';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginKey: '',
			id: '',
			userName: '',
		};
	}
	componentDidMount() {
		if (this.props.userInfoError) {
			localStorage.removeItem('userToken');
			localStorage.removeItem('userName');
			localStorage.removeItem('userID');
			window.location.reload();
		}
	}
	render() {
		return (
			<div className="App">
				<Navigation user={this.props.username} />

				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				{/* <Route path="/register" component={Register} /> */}
				<Route path="/profile/" component={Profile} />
				<Route path="/school/:id" render={props => <SchoolData {...props} />} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		id: state.id,
		userInfoError: stable.userInfoError,
		user: {
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			username: state.username,
			userRole: state.userRole,
			email: state.email,
		},
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo }
)(authenticateHOC(App));
