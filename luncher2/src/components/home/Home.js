import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import Navigation from '../navBar/Navigation';
import School from '../school/School';
import {
	getUserInfo,
	getAllSchools,
	deleteSchool,
	addSchool,
} from '../../actions';

//style
import '../../styles/home.css';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			schoolname: '',
			image: '',
			donation: '',
			isEditing: false,
		};
	}
	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getUserInfo(userToken);
		this.props.getAllSchools(userToken);
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleDeleteSchool = (e, schoolID) => {
		console.log('school id', schoolID);
		let userToken = localStorage.getItem('userToken');

		e.preventDefault();
		this.props.deleteSchool(userToken, schoolID);

		this.props.getAllSchools(userToken);
	};

	handleAddSchool = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let school = {
			image: this.state.image,
			schoolname: this.state.schoolname,
		};
		this.props.addSchool(userToken, school);
		this.props.getAllSchools(userToken);
	};

	handleEditSchool = e => {
		e.preventDefault();
	};

	render() {
		return (
			<>
				<Navigation user={this.props.user} />
				<h1>Welcome {this.props.user.firstName}!</h1>

				{this.props.user.userRole === 'admin' ? (
					<Form className="addSchool">
						<Input
							name="schoolname"
							value={this.state.schoolname}
							required
							onChange={e => {
								this.handleChange(e);
							}}
							placeholder="School Name"
						/>
						<Input
							name="image"
							value={this.state.image}
							onChange={e => {
								this.handleChange(e);
							}}
							placeholder="Image URL"
						/>

						<Input
							name="donation"
							value={this.state.donation}
							onChange={e => {
								this.handleChange(e);
							}}
							placeholder="Donations"
						/>

						<Button
							onClick={e => {
								this.handleAddSchool(e);
							}}>
							Add
						</Button>
					</Form>
				) : null}

				{this.props.schools.map(school => (
					<School
						key={school.id}
						userRole={this.props.user.userRole}
						school={school}
						handleDeleteSchool={this.handleDeleteSchool}
						handleEditSchool={this.handleEditSchool}
					/>
				))}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: {
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			username: state.username,
			userRole: state.userRole,
			email: state.email,
		},
		schools: state.schools,
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo, getAllSchools, deleteSchool, addSchool }
)(Home);
