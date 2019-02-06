import React from 'react';

function UserDonations(props) {
	return (
		<div className="donation">
			<h3>{props.donation.title}</h3>
			<p>{props.donation.description}</p>
			<p>{props.donation.amount}</p>
		</div>
	);
}

export default UserDonations;
