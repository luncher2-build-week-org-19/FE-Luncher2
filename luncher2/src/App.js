import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Login from './components/authentication/Login';
import Home from './components/home/Home';
import Register from './components/authentication/Register';
//styles

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginKey: '',
		};
	}

	render() {
		return (
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path={`/profile/${this.props.id}`} />
				<Route path="/school" />
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
)(App);
