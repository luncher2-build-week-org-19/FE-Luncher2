import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import Navigation from '../navBar/Navigation';
import School from '../school/School';
import { getUserInfo, getAllSchools } from '../../actions';

//style
import '../../styles/home.css';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			schoolname: '',
			image: '',
		};
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getUserInfo(userToken);
		this.props.getAllSchools(userToken);
	}
	render() {
		return (
			<>
				<Navigation username={this.state.userName} />
				<h1>Welcome {this.props.user.firstName}!</h1>

				{/* Form should only be available if user is admin */}
				{/* https://github.com/luncher2-build-week-org-19/luncher2_backend_api#addSchool */}
				{this.props.user.userRole === 'admin' ? (
					<Form className="addSchool">
						<Input
							name="schoolname"
							value={this.state.schoolname}
							required
							placeholder="School Name"
						/>
						<Input
							name="image"
							value={this.state.image}
							required
							placeholder="Image URL"
						/>
						<Button>Add</Button>
					</Form>
				) : null}

				{/* Display schools */}
				{/* https://github.com/luncher2-build-week-org-19/luncher2_backend_api#allSchools */}
				{this.props.schools.map(school => (
					<School school={school} />
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
	{ getUserInfo, getAllSchools }
)(Home);
