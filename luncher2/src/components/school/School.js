import React from 'react';
import { Link } from 'react-router-dom';

function School(props) {
	return (
		<Link to={`/school/${props.school.id}`}>{props.school.schoolname}</Link>
	);
}

export default School;
