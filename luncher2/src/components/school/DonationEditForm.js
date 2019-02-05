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

	componentDidMount() {
		this.setState({
			title: this.props.donation.title,
			description: this.props.donation.description,
			amount: this.props.donation.amount,
		});
	}
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	submitDonation = e => {
		e.preventDefault();
		let userToken = localStorage.getItem('userToken');
		let id = this.props.donation.id;
		let donation = {
			title: this.state.title,
			description: this.state.description,
			amount: this.state.amount,
		};

		this.props.editDonation(userToken, donation, id);
	};

	render() {
		if (this.props.donation === undefined) {
			return <p>...loading</p>;
		}
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
				<Button onClick={e => this.submitDonation(e)}>
					Submit Edit
				</Button>
			</Form>
		);
	}
}
export default connect(
	'',
	{ addDonation, editDonation, deleteDonation }
)(AddDonation);
