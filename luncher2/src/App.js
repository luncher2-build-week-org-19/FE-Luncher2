import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import SchoolInfo from './components/school/SchoolInfo';
import authenticateHOC from './components/authentication/Authenticate';
//styles

import './App.css';

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
				<Route path="/" component={Home} />
				<Route path="/login" component={Login} />
				{/* <Route path="/register" component={Register} /> */}
				<Route path="/profile/" />
				<Route path="/school/:id" component={SchoolInfo} />
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
