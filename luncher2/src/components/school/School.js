import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/school.css';
import lambda from '../../images/lambda.jpg';

function School(props) {
	return (
		<div className="schoolRow">
			<img
				className="schoolImg"
				src={props.school.image ? props.school.image : lambda}
				alt={props.school.schoolname}
			/>
			<div className="schoolInfo">
				<Link to={`/school/${props.school.id}`}>
					{props.school.schoolname}
				</Link>
			</div>
		</div>
	);
}

export default School;
