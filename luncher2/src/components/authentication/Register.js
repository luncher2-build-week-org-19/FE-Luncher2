import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Input, Label, Button } from 'reactstrap';
import { registerUser } from '../../actions/';

import './register.css';

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			account: '',
			username: '',
			email: '',
			password: ''
		};
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleRegister = e => {
		e.preventDefault();
		this.props.registerUser(this.state);
	};

	render() {
		return (
			<>
				<h1>Register</h1>
				<Form className='registerForm'>
					<Input
						name='firstName'
						autoComplete='on'
						placeholder='First Name'
						value={this.state.firstName}
						onChange={e => this.handleChange(e)}
					/>
					<Input
						name='lastName'
						autoComplete='on'
						placeholder='Last Name'
						value={this.state.lastName}
						onChange={e => this.handleChange(e)}
					/>
					<div className='radio'>
						<Input
							type='radio'
							id='User'
							name='account'
							value='user'
							onChange={e => this.handleChange(e)}
						/>
						<Label htmlFor='user'>User</Label>
					</div>
					<div className='radio'>
						<Input
							type='radio'
							id='admin'
							name='account'
							value='admin'
							onChange={e => this.handleChange(e)}
						/>
						<Label htmlFor='admin'>Admin</Label>
					</div>
					<Input
						type='text'
						name='username'
						placeholder='Username'
						value={this.state.username}
						onChange={e => this.handleChange(e)}
					/>
					<Input
						type='email'
						autoComplete='on'
						name='email'
						placeholder='Email'
						value={this.state.email}
						onChange={e => this.handleChange(e)}
					/>
					<Input
						type='password'
						autoComplete='on'
						name='password'
						placeholder='Password'
						value={this.state.password}
						onChange={e => this.handleChange(e)}
					/>
					<Button onClick={e => this.handleRegister(e)}>Register</Button>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</Form>
			</>
		);
	}
}
// const mapStateToProps = state => {};

export default connect(
	'',
	{ registerUser }
)(Register);
