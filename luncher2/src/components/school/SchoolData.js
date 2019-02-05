import React from 'react';
import '../../styles/school.css';
import { connect } from 'react-redux';
import Navigation from '../navBar/Navigation';
import lambda from '../../images/lambda.jpg';
import {
	getSchoolData,
	deleteSchool,
	schoolEdit,
	getUserInfo,
	addDonation,
} from '../../actions';
import { Button, Input, Form } from 'reactstrap';
import DonationForm from './DonationForm';
import '../../styles/schoolData.css';

class SchoolData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			isEditingDonation: false,
			schoolName: '',
			image: '',
			title: '',
			description: '',
			amount: '',
		};
	}

	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getSchoolData(this.props.match.params.id);
		this.props.getUserInfo(userToken);
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleDeleteSchool = (e, schoolID) => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		this.props.deleteSchool(userToken, schoolID);
		this.props.history.push('/');
	};
	handleEditSchool = e => {
		e.preventDefault();
		this.setState({
			isEditing: true,
			schoolName: this.props.schoolData.schoolname,
			image: this.props.schoolData.image,
		});
	};
	submitEdit = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let info = {
			image: this.state.image,
			schoolName: this.state.schoolName,
		};
		this.props.schoolEdit(userToken, info, this.props.match.params.id);
		this.setState({
			isEditing: false,
		});
		window.location.reload();
	};
	editDonation = e => {
		e.preventDefault();
		this.setState({
			isEditingDonation: true,
			title: this.state.title,
			description: this.state.description,
			amount: this.state.amount,
		});
	};
	submitDonation = e => {
		e.preventdefault();
		let userToken = localStorage.getItem('userToken');
		let id = this.props.id;
		let donation = {
			title: this.state.title,
			description: this.state.description,
			amount: this.state.amount,
		};

		this.props.editDonation(userToken, donation, id);
	};

	render() {
		return (
			<div>
				<Navigation user={this.props.username} />
				<Form className={this.state.isEditing ? '' : 'hide'}>
					<Input
						onChange={e => this.handleChange(e)}
						name="schoolName"
						value={this.state.schoolName}
						placeholder="School Name"
					/>
					<Input
						onChange={e => this.handleChange(e)}
						name="image"
						value={this.state.image}
						placeholder="School Image"
					/>
					<Button onClick={e => this.submitEdit(e)}>Submit</Button>
				</Form>

				<div className="schoolWrapper">
					<div className="schoolInfo">
						<div className="schoolTitle">
							<img
								className="schoolImg"
								src={
									this.props.schoolData.image
										? this.props.schoolData.image
										: lambda
								}
								alt={this.props.schoolData.schoolname}
							/>
							<h3>{this.props.schoolData.schoolname}</h3>
							{this.props.userRole === 'admin' ? (
								<div className="modify">
									<i
										className="far fa-edit"
										onClick={e => this.handleEditSchool(e)}
									/>
									<i
										className="far fa-trash-alt"
										onClick={e =>
											this.handleDeleteSchool(
												e,
												this.props.schoolData.id
											)
										}
									/>
								</div>
							) : null}
						</div>
						<ul className="donationsList">
							{this.props.schoolDonations.map(donation => {
								return (
									<li
										key={donation.id}
										className="donationRow">
										<div className="donationInfo">
											<h4>{donation.title}</h4>
											<p>{donation.description}</p>
											<p>${donation.amount}</p>
										</div>
										{this.props.userRole === 'admin' ? (
											<div className="modify">
												<i
													className="far fa-edit"
													onClick={e =>
														this.editDonation(e)
													}
												/>
												<i
													className="far fa-trash-alt"
													onClick={e =>
														this.handleDeleteSchool(
															e,
															this.props
																.schoolData.id
														)
													}
												/>
											</div>
										) : null}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<DonationForm
					isEditingDonation={this.props.isEditingDonation}
					submitDonation={this.submitDonation}
					id={this.props.schoolData.id}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		username: state.username,
		userRole: state.userRole,
		schoolData: state.schoolData,
		schoolDonations: state.schoolDonations,
		user: {
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			username: state.username,
			userRole: state.userRole,
			email: state.email,
		},
	};
};

export default connect(
	mapStateToProps,
	{ getSchoolData, deleteSchool, schoolEdit, getUserInfo, addDonation }
)(SchoolData);
