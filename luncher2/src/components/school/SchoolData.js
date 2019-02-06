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
} from '../../actions';
import { Button, Input, Form } from 'reactstrap';
import DonationForm from './DonationForm';
import '../../styles/schoolData.css';
import DonationEditForm from './DonationEditForm';

class SchoolData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			isEditingDonation: false,
			isAddingDonation: false,
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
	};
	editDonation = (e, donation) => {
		e.preventDefault();
		this.setState({
			isEditingDonation: !this.state.isEditingDonation,
			title: donation.title,
			description: donation.description,
			amount: donation.amount,
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
											this.handleDeleteSchool(e, this.props.schoolData.id)
										}
									/>
								</div>
							) : null}
							{this.props.user.userRole === 'admin' ? (
								<div className="addDonationWrapper">
									<Button
										onClick={e => {
											this.addDonation(e);
										}}>
										{this.state.isAddingDonation ? 'Close' : 'Add Donation'}
									</Button>

									<DonationForm
										isAddingDonation={this.state.isAddingDonation}
										submitDonation={this.submitDonation}
										id={this.props.schoolData.id}
										schoolState={this.state}
									/>
								</div>
							) : null}
						</div>
						<ul className="donationsList">
							{/* {if(this.prop.sschoolsDonations.length === 0){} */}
							{this.props.schoolDonations.map(donation => {
								return (
									<div className="donationWrapper">
										<li className="donationRow" key={donation.id}>
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
															this.editDonation(e, donation)
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
												this.state.isEditingDonation ? '' : 'hide'
											}`}>
											<DonationEditForm donation={donation} />
										</div>
									</div>
								);
							})}
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
	{
		getSchoolData,
		deleteSchool,
		schoolEdit,
		getUserInfo,
		addDonation,
		deleteDonation,
	}
)(SchoolData);
