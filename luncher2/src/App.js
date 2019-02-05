import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import SchoolData from './components/school/SchoolData';
import authenticateHOC from './components/authentication/Authenticate';
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

	componentDidMount = () => {
		let id = localStorage.getItem('id');
		let userName = localStorage.getItem('userName');
		this.setState({
			id: id,
			userName: userName,
		});
	};

	render() {
		return (
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				{/* <Route path="/register" component={Register} /> */}
				<Route path="/profile/" component={Profile} />
				<Route
					path="/school/:id"
					render={props => <SchoolData {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		id: state.id,
	};
};

export default connect(
	mapStateToProps,
	{}
)(authenticateHOC(App));
