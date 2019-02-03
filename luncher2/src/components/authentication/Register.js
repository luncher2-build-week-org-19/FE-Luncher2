import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Label, Button } from 'reactstrap';

import './register.css';

class Register extends React.Component {
	render() {
		return (
			<>
				<h1>Register</h1>
				<Form className='registerForm'>
					<Input name='firstName' autoComplete='on' placeholder='First Name' />
					<Input name='lastName' autoComplete='on' placeholder='Last Name' />
					<div className='radio'>
						<Input type='radio' id='User' name='account' value='user' />
						<Label htmlFor='user'>User</Label>
					</div>
					<div className='radio'>
						<Input type='radio' id='admin' name='account' value='admin' />
						<Label htmlFor='admin'>Admin</Label>
					</div>
					<Input type='text' name='username' placeholder='Username' />
					<Input
						type='email'
						autoComplete='on'
						name='name'
						placeholder='Email'
					/>
					<Input
						type='password'
						autoComplete='on'
						name='password'
						placeholder='Password'
					/>
					<Button>Register</Button>
					<p>
						Already have an account? <Link to='/login'>Login</Link>
					</p>
				</Form>
			</>
		);
	}
}

export default Register;
