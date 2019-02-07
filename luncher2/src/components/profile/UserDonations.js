import React from 'react';

function UserDonations(props) {
	return (
		<div className="userDonation">
			<h3>Title: {props.donation.title}</h3>
			<p>Description: {props.donation.description}</p>
			<p>Donation${props.donation.amount}</p>
		</div>
	);
}

export default UserDonations;
