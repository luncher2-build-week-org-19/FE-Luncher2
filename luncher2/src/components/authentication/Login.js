import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/';

import '../../styles/login.css';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: '',
			password: '',
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmitLogin = () => {
		let credentials = {
			userName: this.state.userName,
			password: this.state.password,
		};
		this.props.loginUser(credentials);
	};

	render() {
		return (
			<>
				<h1>Login</h1>
				<Form
					className="loginForm"
					onSubmit={() => {
						this.handleSubmitLogin();
					}}>
					<Input
						type="text"
						name="userName"
						value={this.state.userName}
						onChange={e => this.handleChange(e)}
						placeholder="Username"
					/>
					<Input
						type="password"
						autoComplete="on"
						name="password"
						value={this.state.password}
						onChange={e => this.handleChange(e)}
						placeholder="Password"
					/>
					<Button onClick={() => this.handleSubmitLogin()}>
						Login
					</Button>
					<p>
						Need an account? <Link to="/register">Register</Link>
					</p>
				</Form>
			</>
		);
	}
}

export default connect(
	'',
	{ loginUser }
)(withRouter(Login));
