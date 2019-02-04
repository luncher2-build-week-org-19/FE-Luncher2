import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Label, Button } from 'reactstrap';
import { registerUser } from '../../actions/';

import '../../styles/register.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			userRole: '',
			userName: '',
			email: '',
			password: '',
		};
	}

	componentDidUpdate() {
		// let redirect = this.props.registerRedirect;
		// if (redirect === true) {
		// 	this.props.history.push('/');
		// }
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
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

		// let redirect = this.props.registerRedirect;
		// if (redirect === true) {
		// 	this.props.history.push('/');
		// }
	};

	render() {
		return (
			<>
				<h1>Register</h1>
				<Form className="registerForm" onSubmit={this.handleRegister}>
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
					<Button>Register</Button>
					{this.props.id ? (
						<p>Success</p>
					) : (
						<p>Registration Failed</p>
					)}

					<p>
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</Form>
			</>
		);
	}
}
const mapStateToProps = state => {
	return {
		error: state.error,
		registerRedirect: state.registerRedirect,
		id: state.id,
	};
};

export default connect(
	mapStateToProps,
	{ registerUser }
)(Register);
