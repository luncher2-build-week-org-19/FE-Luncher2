import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'reactstrap';
import Loader from 'react-loader-spinner';
import School from '../school/School';
import {
	getUserInfo,
	getAllSchools,
	deleteSchool,
	addSchool
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
			isAdding: false
		};
	}
	componentDidMount() {
		let userToken = localStorage.getItem('userToken');
		this.props.getAllSchools(userToken);
		this.props.getUserInfo(userToken);
	}
	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		let userToken = localStorage.getItem('userToken');

		if (this.props.schools !== prevProps.schools) {
			if (this.props.getAllSchoolIsUpdating) {
				this.props.getAllSchools(userToken);
			}
		}
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleAddSchool = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let school = {
			image: this.state.image,
			schoolname: this.state.schoolname
		};
		this.props.addSchool(userToken, school);
		this.props.getAllSchools(userToken);
	};

	render() {
		return (
			<>
				<h1>Welcome {this.props.user.firstName}!</h1>

				{this.props.isLoading && (
					<Loader type='ThreeDots' color='#somecolor' height={80} width={80} />
				)}
				{this.props.user.userRole === 'admin' ? (
					<Form
						className='addSchool'
						onSubmit={e => {
							this.handleAddSchool(e);
						}}
					>
						<Input
							name='schoolname'
							value={this.state.schoolname}
							required
							onChange={e => {
								this.handleChange(e);
							}}
							placeholder='School Name'
						/>
						<Input
							name='image'
							value={this.state.image}
							onChange={e => {
								this.handleChange(e);
							}}
							placeholder='Image URL'
						/>
						<Button>Add</Button>
					</Form>
				) : null}

				{this.props.schools.map(school => (
					<School key={school.id} school={school} />
				))}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		loginIsLoading: state.loginIsLoading,
		user: {
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			username: state.username,
			userRole: state.userRole,
			email: state.email
		},
		schools: state.schools,
		username: state.username,
		getAllSchoolIsLoading: state.getAllSchoolIsLoading
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo, getAllSchools, deleteSchool, addSchool }
)(Home);
