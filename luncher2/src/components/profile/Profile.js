import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navBar/Navigation';
import { getUserInfo } from '../../actions';
import ProfileForm from './ProfileForm';
import { Button } from 'reactstrap';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			isEditingUser: false,
		};
	}
	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getUserInfo(userToken);
		this.setState({
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			email: this.props.email,
		});
	}
	toggleEdit = e => {
		e.preventDefault();
		this.setState({
			isEditingUser: !this.state.isEditingUser,
		});
	};
	render() {
		// if (this.props.userRole === undefined) {
		// 	return <p>...loading</p>;
		// }
		return (
			<div>
				<Navigation user={this.props.username} />

				<h1>
					{this.props.firstName} {this.props.lastName}
				</h1>
				<p>Role: {this.props.userRole}</p>
				<p>Email: {this.props.email}</p>
				<Button
					onClick={e => {
						this.toggleEdit(e);
					}}>
					{this.state.isEditingUser ? 'Close' : 'Edit'}
				</Button>
				{this.state.isEditingUser ? (
					<ProfileForm
						isEditingUser={this.state.isEditingUser}
						// profileState={this.state}
					/>
				) : null}
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
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo }
)(Profile);
