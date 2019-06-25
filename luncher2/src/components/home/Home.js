import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import Loader from "react-loader-spinner";

import {
	getUserInfo,
	getAllSchools,
	deleteSchool,
	addSchool,
	getDonationsBySchoolId
} from "../../actions";
import "../../styles/home.css";
import SchoolList from "../school/SchoolList";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			schoolname: "",
			image: "",
			donation: "",
			isEditing: false,
			isAdding: false
		};
	}
	componentDidMount() {
		let userToken = localStorage.getItem("userToken");
		this.props.getAllSchools(userToken);
		this.props.getUserInfo(userToken);
	}
	componentDidUpdate(prevProps) {
		let userToken = localStorage.getItem("userToken");

		if (this.props.getAllSchoolIsUpdating) {
			if (this.props.schoolAdded !== prevProps.schoolAdded) {
				console.log("firing");
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
		let userToken = localStorage.getItem("userToken");
		let school = {
			image: this.state.image,
			schoolname: this.state.schoolname
		};
		this.props.addSchool(userToken, school);
		this.props.getAllSchools(userToken);
	};

	getAllDondationsBySchool = id => {
		return this.props.getDonationsBySchoolId(id);
	};
	render() {
		return (
			<>
				<h1>Welcome {this.props.getUserByID.firstName}!</h1>

				{this.props.isLoading && (
					<Loader type='ThreeDots' color='#f9a03f' height={80} width={80} />
				)}
				{this.props.getUserByID.userRole === "admin" ? (
					<Form
						className='addSchool'
						onSubmit={e => {
							this.handleAddSchool(e);
						}}
					>
						<div className='addSchoolInputs'>
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
						</div>
						<Button>Add</Button>
					</Form>
				) : null}
				<SchoolList
					schools={this.props.schools}
					getAllDondationsBySchool={this.getAllDondationsBySchool}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		loginIsLoading: state.loginIsLoading,
		getUserByID: state._users.getUserByID,
		schools: state._schools.allSchools,
		username: state.username,
		getAllSchoolIsLoading: state.getAllSchoolIsLoading,
		totalDonationsBySchool: state.totalDonationsBySchool,
		schoolAdded: state.schoolAdded
	};
};

export default connect(
	mapStateToProps,
	{
		getUserInfo,
		getAllSchools,
		deleteSchool,
		addSchool,
		getDonationsBySchoolId
	}
)(Home);
