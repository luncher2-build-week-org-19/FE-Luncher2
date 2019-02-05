import React from 'react';

function SchoolInfo(props) {
	return (
		<div className="schoolInfo">
			<img src={props.school.image} alt={props.school.schoolname} />
			<h1>{props.school.schoolname}</h1>
		</div>
	);
}

export default SchoolInfo;
