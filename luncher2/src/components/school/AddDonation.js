import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addDonation, editDonation, deleteDonation } from '../../actions';

class AddDonation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			amount: '',
		};
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	addDonation = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let id = this.props.id;
		let donation = {
			title: this.state.title,
			description: this.state.description,
			amount: this.state.amount,
		};
		this.props.addDonation(userToken, donation, id);
	};

	render() {
		return (
			<Form>
				<Input
					required
					name="title"
					value={this.state.title}
					placeholder="Title"
					onChange={e => this.handleChange(e)}
				/>
				<Input
					required
					name="description"
					value={this.state.description}
					placeholder="Description"
					onChange={e => this.handleChange(e)}
				/>
				<Input
					required
					name="amount"
					value={this.state.amount}
					placeholder="Amount"
					onChange={e => this.handleChange(e)}
				/>
				<Button onClick={e => this.addDonation(e)}>Submit</Button>
			</Form>
		);
	}
}
export default connect(
	'',
	{ addDonation, editDonation, deleteDonation }
)(AddDonation);
