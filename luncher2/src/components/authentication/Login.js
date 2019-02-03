import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';

import './login.css';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmitLogin = () => {
		// let credentials = {
		// 	username: this.state.username,
		// 	password: this.state.password
		// };
		//dispatch action creator
		this.props.history.push('/');
	};

	render() {
		return (
			<>
				<h1>Login</h1>
				<Form
					className='loginForm'
					onSubmit={() => {
						this.handleSubmitLogin();
					}}
				>
					<Input
						type='text'
						name='username'
						value={this.state.username}
						onChange={e => this.handleChange(e)}
						placeholder='Username'
					/>
					<Input
						type='password'
						autoComplete='on'
						name='password'
						value={this.state.password}
						onChange={e => this.handleChange(e)}
						placeholder='Password'
					/>
					<Button>Login</Button>
					<p>
						Need an account? <Link to='/register'>Register</Link>
					</p>
				</Form>
			</>
		);
	}
}

export default Login;
