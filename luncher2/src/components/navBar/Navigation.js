import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

import '../../styles/navigation.css';
import Errors from './Errors';

const Navigation = props => {
	const logoutUser = () => {
		localStorage.removeItem('userToken');
		localStorage.removeItem('id');
		window.location.reload();
	};
	return (
		<>
			<Nav>
				<Link to="/">Luncher</Link>
				<div className="rightMenu">
					<NavLink className="navItem" to="/profile/">
						{localStorage.getItem('userName')}
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
			<Errors />
		</>
	);
};

export default Navigation;
