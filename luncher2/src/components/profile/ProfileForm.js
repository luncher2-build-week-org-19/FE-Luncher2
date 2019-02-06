import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions';
import { Form, Button, Input } from 'reactstrap';
import { getUserInfo } from '../../actions';

class ProfileForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			isEditingUser: '',
		};
	}

	componentDidMount = () => {
		let userToken = localStorage.getItem('userToken');
		this.props.getUserInfo(userToken);

		this.setState({
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			email: this.props.email,
			isEditingUser: this.props.isEditingUser,
		});
	};
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	editUser = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
		};
		this.props.editUser(userToken, user);
		this.setState({
			isEditingUser: false,
		});
	};

	render() {
		return (
			<Form>
				<Input
					name="firstName"
					value={this.state.firstName}
					placeholder="First Name"
					onChange={e => this.handleChange(e)}
				/>
				<Input
					name="lastName"
					value={this.state.lastName}
					placeholder="last Name"
					onChange={e => this.handleChange(e)}
				/>
				<Input
					type="email"
					name="email"
					value={this.state.email}
					placeholder="Email"
					onChange={e => this.handleChange(e)}
				/>
				<Input
					required
					type="password"
					name="password"
					value={this.state.password}
					placeholder="Please re-enter password"
					onChange={e => this.handleChange(e)}
				/>
				<Button
					onClick={e => {
						this.editUser(e);
					}}>
					Submit Changes
				</Button>
			</Form>
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
	{ editUser, getUserInfo }
)(ProfileForm);
