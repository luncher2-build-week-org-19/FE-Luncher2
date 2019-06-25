import React from "react";
import School from "./School";

const SchoolList = props => {
	return (
		<div className='schoolList'>
			{props.schools.map(school => (
				<School
					key={school.id}
					school={school}
					getAllDondationsBySchool={props.getAllDondationsBySchool}
				/>
			))}
		</div>
	);
};

export default SchoolList;
