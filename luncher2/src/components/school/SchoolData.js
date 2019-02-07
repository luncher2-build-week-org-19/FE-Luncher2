import React from 'react';
import '../../styles/school.css';
import { connect } from 'react-redux';
import lambda from '../../images/lambda.jpg';
import {
	getSchoolData,
	deleteSchool,
	schoolEdit,
	getUserInfo,
	addDonation,
	deleteDonation,
	editDonation,
} from '../../actions';
import { Button, Input, Form } from 'reactstrap';
import DonationForm from './DonationForm';
import '../../styles/schoolData.css';
import DonationEditForm from './DonationEditForm';

class SchoolData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditingSchool: false,
			isEditingDonation: false,
			isAddingDonation: false,
			schoolName: '',
			image: '',
			title: '',
			description: '',
			amount: '',
			donationID: '',
		};
	}

	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getSchoolData(this.props.match.params.id);
		this.props.getUserInfo(userToken);
	}
	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.schoolDonations !== prevProps.schoolDonations) {
			if (this.props.schoolDonationsIsUpdating) {
				this.props.getSchoolData(this.props.match.params.id);
			}
		}
		if (this.props.schoolDonations !== prevProps.schoolDonations) {
			if (this.props.schoolDonationsIsDeleting) {
				this.props.getSchoolData(this.props.match.params.id);
			}
		}
		if (this.props.schoolEdit !== prevProps.schoolEdit) {
			if (this.props.schoolInfoIsUpdating) {
				this.props.getSchoolData(this.props.match.params.id);
			}
		}
		if (this.props.schoolData !== prevProps.schoolData) {
			if (this.props.isSchoolEditing) {
				this.props.getSchoolData(this.props.match.params.id);
			}
		}
		if (this.props.schoolDonations !== prevProps.schoolDonations) {
			if (this.props.isEditingDonation) {
				this.props.getSchoolData(this.props.match.params.id);
			}
		}
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
			isEditingSchool: true,
			schoolName: this.props.schoolData.schoolname,
			image: this.props.schoolData.image,
		});
	};
	closeEditSchool = e => {
		e.preventDefault();
		this.setState({ isEditingSchool: false });
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
			isEditingSchool: false,
		});
	};
	editDonation = (e, donation, donationID) => {
		e.preventDefault();
		this.setState({
			isEditingDonation: !this.state.isEditingDonation,
			title: donation.title,
			description: donation.description,
			amount: donation.amount,
			donationID: donationID,
		});
	};
	submitDonation = (e, donationInfo, donationID) => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		// let id = this.props.donation.id;
		let donation = {
			title: donationInfo.title,
			description: donationInfo.description,
			amount: donationInfo.amount,
		};

		this.props.editDonation(userToken, donation, donationID, this.props.match.params.id);
		this.setState({
			donationID: '',
		});
	};
	handleDeleteDonation = (e, id) => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');

		this.props.deleteDonation(userToken, id);
	};
	addDonation = e => {
		e.preventDefault();
		this.setState({
			isAddingDonation: !this.state.isAddingDonation,
		});
	};

	render() {
		if (this.props.schoolDonations === undefined) {
			return <p>...loading</p>;
		}
		if (this.props.schoolData === undefined) {
			return <React.Fragment>School doesn't exist.</React.Fragment>;
		}
		return (
			<div>
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
											this.handleDeleteSchool(e, this.props.schoolData.id)
										}
									/>
								</div>
							) : null}
							<Form
								className={`editSchoolInfo ${
									this.state.isEditingSchool ? '' : 'hide'
								}`}>
								<Input className='editSchoolInput'
									onChange={e => this.handleChange(e)}
									name="schoolName"
									value={this.state.schoolName}
									placeholder="School Name"
								/>
								<Input className='editSchoolInput'
									onChange={e => this.handleChange(e)}
									name="image"
									value={this.state.image}
									placeholder="School Image"
								/>
								<Button className='editSchoolBtn' onClick={e => this.submitEdit(e)}>Submit</Button>
								<Button className='editSchoolBtn' onClick={e => this.closeEditSchool(e)}>Close </Button>
							</Form>

							{this.props.user.userRole === 'admin' ? (
								<div className="addDonationWrapper">
									<DonationForm
										isAddingDonation={this.state.isAddingDonation}
										submitDonation={this.submitDonation}
										id={this.props.schoolData.id}
										schoolState={this.state}
									/>
								</div>
							) : null}
							<Button
								onClick={e => {
									this.addDonation(e);
								}}>
								{this.state.isAddingDonation ? 'Close' : 'Add Donation'}
							</Button>
						</div>
						<ul className="donationsList">
							{this.props.schoolDonations.length === 0 ? (
								<h2>No available donation requests</h2>
							) : (
								this.props.schoolDonations.map(donation => {
									return (
										<div className="donationWrapper" key={donation.id}>
											<li className="donationRow">
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
																this.editDonation(
																	e,
																	donation,
																	donation.id
																)
															}
														/>
														<i
															className="far fa-trash-alt"
															onClick={e =>
																this.handleDeleteDonation(
																	e,
																	donation.id
																)
															}
														/>
													</div>
												) : null}
											</li>
											<div
												className={`donationEditForm ${
													this.state.donationID === donation.id
														? ''
														: 'hide'
												}`}>
												<DonationEditForm
													submitDonation={this.submitDonation}
													donation={donation}
												/>
											</div>
										</div>
									);
								})
							)}
						</ul>
					</div>
				</div>
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
		schoolDonationsIsUpdating: state.schoolDonationsIsUpdating,
		schoolDonationsIsDeleting: state.schoolDonationsIsDeleting,
		schoolInfoIsUpdating: state.schoolInfoIsUpdating,
		schoolEdit: state.schoolEdit,
		isSchoolEditing: state.isSchoolEditing,
		user: {
			id: state.id,
			firstName: state.firstName,
			lastName: state.lastName,
			username: state.username,
			userRole: state.userRole,
			email: state.email,
		},
		deleteError: state.deleteError,
		editError: state.editError,
	};
};

export default connect(
	mapStateToProps,
	{
		getSchoolData,
		deleteSchool,
		schoolEdit,
		getUserInfo,
		addDonation,
		deleteDonation,
		editDonation,
	}
)(SchoolData);
