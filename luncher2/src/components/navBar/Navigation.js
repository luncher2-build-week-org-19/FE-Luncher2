import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

import '../../styles/navigation.css';

const Navigation = props => {
	const logoutUser = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('id');
		window.location.reload();
	};
	return (
		<Nav>
			<Link to="/">Luncher</Link>
			<div className="rightMenu">
				<NavLink className="navItem" to="/profile/">
					{props.user.username}
				</NavLink>
				<NavLink
					className="navItem"
					to="/"
					onClick={() => {
						logoutUser();
					}}>
					Logout
				</NavLink>
			</div>
		</Nav>
	);
};

export default Navigation;
