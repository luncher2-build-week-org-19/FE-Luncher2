import React from 'react';
import { connect } from 'react-redux';
import { Label, Form, Input, Button } from 'reactstrap';


import '../../styles/login.css';

class Login extends React.component {
	constructor() {
		super();
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
		this.props.history.push('/');
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

	render(){
		return(
			<div className='wrapper'>
				<div className={this.state.loginForm ? 'show' : 'hide'	}>
					<Form className="loginForm" >
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
							Need an account?{' '}
							<div onClick={e => this.registerForm(e)}>Register</div>
						</p>
					</Form>
				</div>
				
				<div className={this.state.loginForm ? 'hide' : 'show'}>
					<Form className="registerForm">
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
								required
								onChange={e => this.handleChange(e)}
							/>
							<Label htmlFor="user">User</Label>
						</div>
						<div className="radio">
							<Input
								type="radio"
								id="admin"
								name="userRole"
								value="admin"
								required
								onChange={e => this.handleChange(e)}
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
						<Button onClick={e => this.handleRegister(e)}>
							Register
						</Button>

						
					</Form>
					<p>
						Already have an account?{' '}
						<div onClick={e => this.loginForm(e)}>Login</div>
					</p>
				</div>
			</div>
				
		)
	};

	mapStateToProps

	export default connect(
		mapStateToProps,
		{ loginUser, registerUser }
	)(Login);
	
