import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo, donationByUser } from '../../actions';
import ProfileForm from './ProfileForm';
import { Button } from 'reactstrap';
import UserDonations from './UserDonations';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			isEditingUser: false
		};
	}
	componentDidMount() {
		let userToken = localStorage.getItem('userToken');
		let userID = localStorage.getItem('userID');

		this.props.getUserInfo(userToken);
		this.props.donationByUser(userID);
		this.setState({
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			email: this.props.email
		});
	}
	toggleEdit = e => {
		e.preventDefault();
		this.setState({
			isEditingUser: !this.state.isEditingUser
		});
	};
	render() {
		return (
			<div>
				{/* <Navigation user={this.props.username} /> */}

				<h1>
					{this.props.firstName} {this.props.lastName}
				</h1>
				<p>Role: {this.props.userRole}</p>
				<p>Email: {this.props.email}</p>
				<Button
					onClick={e => {
						this.toggleEdit(e);
					}}
				>
					{this.state.isEditingUser ? 'Close' : 'Edit'}
				</Button>
				{this.state.isEditingUser ? (
					<ProfileForm
						isEditingUser={this.state.isEditingUser}
						// profileState={this.state}
					/>
				) : null}
				<div className='userDonations'>
					{this.props.donationsByUser.map(donation => (
						<UserDonations key={donation.id} donation={donation} />
					))}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		id: state.id,
		firstName: state.firstName,
		lastName: state.lastName,
		username: state.username,
		userRole: state.userRole,
		email: state.email,
		donationsByUser: state.donationsByUser
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo, donationByUser }
)(Profile);
