import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import Navigation from '../navBar/Navigation';
import authenticateHOC from '../authentication/Authenticate';
import { getUserInfo } from '../../actions';

//style
import '../../styles/home.css';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: '',
		};
	}
	componentDidMount() {
		console.log('CDM');
		// console.log(getUserInfo);
		let userToken = localStorage.getItem('userToken');
		console.log(userToken);

		this.props.getUserInfo(userToken);
	}

	render() {
		return (
			<>
				<Navigation username={this.state.userName} />
				<h1>Home view after login</h1>

				<Form className="addSchool">
					<Input name="school" placeholder="School Name" />
					<Button>Add</Button>
				</Form>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: {
			id: state.user.id,
			username: state.user.username,
			role: state.user.role,
		},
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo }
)(authenticateHOC(Home));
