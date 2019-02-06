import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/school.css';
import lambda from '../../images/lambda.jpg';

function School(props) {
	return (
		<Link className="schoolRow" to={`/school/${props.school.id}`}>
			<img
				className="schoolImg"
				src={props.school.image ? props.school.image : lambda}
				alt={props.school.schoolname}
			/>
			<div className="schoolName">{props.school.schoolname}</div>
		</Link>
	);
}

export default School;
