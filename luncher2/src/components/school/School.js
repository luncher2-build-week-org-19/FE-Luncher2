import React from 'react';
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
				<h3>{props.school.schoolname}</h3>
				<p>Donations: display donation number here</p>
			</div>
			{props.userRole === 'admin' ? (
				<div className="modify">
					<i
						className="far fa-edit"
						onClick={e => props.handleEditSchool(e)}
					/>
					<i
						className="far fa-trash-alt"
						onClick={e =>
							props.handleDeleteSchool(e, props.school.id)
						}
					/>
				</div>
			) : null}
		</div>
	);
}

export default School;
