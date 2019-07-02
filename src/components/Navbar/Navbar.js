import React from 'react';	
import {Link} from 'react-router-dom';
import mountains from '../media/mountain.png';

import './Navbar.css';
	
	const Navbar = () => {
	return(
<div className='Page'>
<div className='Navbar'>
<div className='nav-content'>
<Link className='nav' to='/'>
<img className='back-to-home' src={mountains} alt="mountains"></img>    
</Link>
<Link className="nav" to="/">
        <div className="text">
        HOME
        </div>
        </Link>
   		<Link className="nav" to="/about">
        <div className="text">
        ABOUT
        </div>
        </Link>
        <Link className="nav" to="/meet-the-members">
        <div className="text">
        MEET THE MEMBERS
        </div>
        </Link>
        <Link className="nav" to="/gigs">
        <div className="text">
        GIGS
        </div>
        </Link>
        <Link className="nav" to="/contact">
        <div className="text">
        CONTACT
        </div>
        </Link>
</div>
	</div>
        </div>
	);
	}
	
export default Navbar;