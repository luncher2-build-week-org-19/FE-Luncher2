import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../styles/school.css";
import lambda from "../../images/lambda.jpg";
// import { donationByUser } from '../../actions';

function School(props) {
	return (
		<Styles>
			<Link className='schoolItem' to={`/school/${props.school.id}`}>
				<div className='schoolItem_left'>
					<img
						className='schoolImg'
						src={props.school.image ? props.school.image : lambda}
						alt={props.school.schoolname}
					/>
					<div className='schoolName'>{props.school.schoolname}</div>
				</div>
			</Link>
		</Styles>
	);
}

export default School;

const Styles = styled.div`
	.schoolItem {
		display: flex;
		width: 800px;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
		border-bottom: 1px solid #8e8e8e;
		padding: 5px;
		margin: 5px auto;
		font-weight: 500;
		:hover {
			background-color: #006ba6;
			color: white;
			text-decoration: none;
		}
	}
	.schoolImg {
		height: 50px;
		width: auto;
		margin-right: 15px;
		border-radius: 50%;
	}
`;
