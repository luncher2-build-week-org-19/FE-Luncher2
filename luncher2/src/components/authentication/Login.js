import React from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../actions/login_action';
import { Form, Input, Button, Label } from 'reactstrap';
import Loader from 'react-loader-spinner';

import '../../styles/login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			userRole: '',
			userName: '',
			email: '',
			password: '',
			loginForm: true,
		};
	}

	handleChange = e => {
		// e.preventDefault();
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
		localStorage.setItem('userName', this.state.userName);
	};

	handleRegister = e => {
		e.preventDefault();
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userRole: this.state.userRole,
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
		};
		this.props.registerUser(user);
	};

	loginForm = () => {
		this.setState({
			loginForm: true,
		});
	};
	registerForm = () => {
		this.setState({
			loginForm: false,
		});
	};

	render() {
		return (
			<div className="wrapper">
				{this.props.loginIsLoading && (
					<div className="loginLoader">
						<Loader type="ThreeDots" color="#f9a03f" height={80} width={80} />
					</div>
				)}
				<div className={`formWrapper ${this.props.loginIsLoading ? 'hide' : ''}`}>
					<img
						className="logo"
						src="https://raw.githubusercontent.com/luncher2-build-week-org-19/UI-tabita-filimon/tabita-filimon/IMG/OrangeSlice%20(1).png"
						alt="luncher"
					/>

					<Form className={`loginForm ${this.state.loginForm ? '' : 'hide'}`}>
						<p className={this.props.loginError ? 'error' : 'hide'}>
							{this.props.loginError ? 'Incorrect login' : null}
						</p>

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
						<Button onClick={() => this.handleSubmitLogin()}>Login</Button>
						<p>
							Need an account?
							<span className="link" onClick={e => this.registerForm(e)}>
								Register
							</span>
						</p>
					</Form>
					<Form className={`registerForm ${this.state.loginForm ? 'hide' : ''}`}>
						<p className={this.props.registerError ? 'error' : 'hide'}>
							{this.props.registerError
								? 'Username and/or email already in use'
								: null}
						</p>

						<Input
							name="firstName"
							autoComplete="on"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={e => this.handleChange(e)}
						/>
						<Input
							name="lastName"
							autoComplete="on"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={e => this.handleChange(e)}
						/>
						<div className="radio">
							<Input
								type="radio"
								id="User"
								name="userRole"
								value="user"
								checked={this.state.userRole === 'user'}
								required
								onChange={this.handleChange}
							/>
							<Label htmlFor="user">User</Label>
						</div>
						<div className="radio">
							<Input
								type="radio"
								id="admin"
								name="userRole"
								value="admin"
								checked={this.state.userRole === 'admin'}
								required
								onChange={this.handleChange}
							/>
							<Label htmlFor="admin">Admin</Label>
						</div>
						<Input
							type="text"
							name="userName"
							placeholder="Username"
							required
							value={this.state.userName}
							onChange={e => this.handleChange(e)}
						/>
						<Input
							type="email"
							autoComplete="on"
							name="email"
							placeholder="Email"
							required
							value={this.state.email}
							onChange={e => this.handleChange(e)}
						/>
						<Input
							type="password"
							autoComplete="on"
							name="password"
							placeholder="Password"
							required
							value={this.state.password}
							onChange={e => this.handleChange(e)}
						/>
						<Button onClick={e => this.handleRegister(e)}>Register</Button>
						<p>
							Already have an account?{' '}
							<span className="link" onClick={e => this.loginForm(e)}>
								Login
							</span>
						</p>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loginIsLoading: state._users.isLoading_Login,
		loginError: state._users.error_Login,
		registerError: state.registerError,
	};
};

export default connect(
	mapStateToProps,
	{ loginUser, registerUser }
)(Login);
