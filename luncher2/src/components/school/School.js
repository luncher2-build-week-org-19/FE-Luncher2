import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/school.css';
import lambda from '../../images/lambda.jpg';
// import { donationByUser } from '../../actions';

function School(props) {
	return (
		<Link className="schoolItem" to={`/school/${props.school.id}`}>
			<div className="schoolItem_left">
				<img
					className="schoolImg"
					src={props.school.image ? props.school.image : lambda}
					alt={props.school.schoolname}
				/>
				<div className="schoolName">{props.school.schoolname}</div>
			</div>
			{/* <div className='schoolItem_right'>
				<p> Total Donations:</p>
				<p> {`{totalDonations.here}`}</p>
			</div> */}
		</Link>
	);
}

export default School;
