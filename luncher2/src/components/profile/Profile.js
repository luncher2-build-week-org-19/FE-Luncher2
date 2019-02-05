import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navBar/Navigation';
import { getUserInfo } from '../../actions';

class Profile extends React.Component {
	componentDidMount() {
		let userToken = localStorage.getItem('userToken');

		this.props.getUserInfo(userToken);
	}
	render() {
		return (
			<div>
				<Navigation user={this.props.user} />

				<h1>
					{this.props.user.firstName} {this.props.user.lastName}
				</h1>
				<p>Role: {this.props.user.userRole}</p>
				<p>Email: {this.props.user.email}</p>
			</div>
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
	};
};

export default connect(
	mapStateToProps,
	{ getUserInfo }
)(Profile);
