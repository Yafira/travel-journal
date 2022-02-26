import React from 'react';
import './navbar.css';

export default function Navbar() {
	return (
		<nav>
			<img src={'/assets/earth.png'} alt='logo' className='nav--logo' />
			<p>my travel journal.</p>
		</nav>
	);
}
