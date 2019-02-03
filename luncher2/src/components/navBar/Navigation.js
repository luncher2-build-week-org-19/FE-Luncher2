import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';

import './navigation.css';

const Navigation = () => {
	return (
		<Nav>
			<Link to='/'>Luncher</Link>
			<div className='rightMenu'>
				<NavLink className='navItem' to='/'>
					Home
				</NavLink>
				<NavLink className='navItem' to='/profile/:id'>
					Profile
				</NavLink>
				<NavLink className='navItem' to='/'>
					Logout
				</NavLink>
			</div>
		</Nav>
	);
};

export default Navigation;
