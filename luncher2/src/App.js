import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//components
import Login from './components/login/Login';
import Home from './components/home/Home';
//styles

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginKey: ''
		};
	}

	componentDidMount() {
		this.setState({
			loginKey: localStorage.getItem('key')
		});
	}

	render() {
		return (
			<div className='App'>
				<Route path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/profile' />
				<Route path='/school' />
			</div>
		);
	}
}

export default App;
