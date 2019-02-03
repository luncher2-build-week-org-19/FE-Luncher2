import React from 'react';
import { Form, Input, Label } from 'reactstrap';

import './login.css';

class Login extends React.Component {
	render() {
		return (
			<>
				<h1>login page</h1>
				<Form>
					<Input name='firstName' autoComplete='on' placeholder='First Name' />
					<Input name='lastName' autoComplete='on' placeholder='Last Name' />
					<div>
						<Input type='radio' id='User' name='accout' value='user' />
						<Label htmlFor='user'>User</Label>
					</div>
					<div>
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
				</Form>
			</>
		);
	}
}

export default Login;
