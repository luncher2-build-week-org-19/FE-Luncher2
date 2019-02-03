import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';

import './login.css';

class Login extends React.Component {
	render() {
		return (
			<>
				<h1>Login</h1>
				<Form className='loginForm'>
					<Input type='text' name='username' placeholder='Username' />
					<Input
						type='password'
						autoComplete='on'
						name='password'
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
