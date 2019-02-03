import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import Navigation from '../navBar/Navigation';

//style
import './home.css';

class Home extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<h1>Home view after login</h1>

				<Form className='addSchool'>
					<Input name='school' placeholder='School Name' />
					<Button>Add</Button>
				</Form>
			</>
		);
	}
}

export default Home;
