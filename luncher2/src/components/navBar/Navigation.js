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
		<div className='navWrapper'>
			<Nav>
				<Link className='navApp' to='/'>
					<img
						className='navLogo'
						src='https://raw.githubusercontent.com/luncher2-build-week-org-19/UI-tabita-filimon/tabita-filimon/IMG/OrangeSlice%20(1).png'
						alt='luncher'
					/>
					Luncher
				</Link>
				<div className='rightMenu'>
					<NavLink className='navItem' to='/profile/'>
						{localStorage.getItem('userName')}
					</NavLink>
					<NavLink
						className='navItem'
						to='/'
						onClick={() => {
							logoutUser();
						}}
					>
						Logout
					</NavLink>
				</div>
			</Nav>
			<Errors />
		</div>
	);
};

export default Navigation;
