import React from 'react';	
import mountains from '../media/mountain.png';
import icon from '../media/navbar.svg';

import './Navbar.css';
	
	const Navbar = () => {
	return(
                <div className='Navbar'>
                <div className='side'>     
                </div>
                <img className='icon' src={icon} alt="icon"></img>   
                <a className='nav' href='#home'>
                        <img className='back-to-home' src={mountains} alt="mountains"></img>    
                </a>
                        <div className='Navbar-Links' ref="mobile-links">
                                <a className='nav' href='#home'>
                                        <div className="text">
                                                HOME
                                        </div>
                                </a>
                                <a className='nav' href='#about'>
                                        <div className="text">
                                                ABOUT
                                        </div>
                                </a>
                                <a className="nav" href="#meet-the-members">
                                        <div className="text">
                                                MEET THE MEMBERS
                                        </div>
                                </a>
                                <a className="nav" href="#music">
                                        <div className="text">
                                               OUR MUSIC
                                        </div>
                                </a>
                                <a className="nav" href="#gigs">
                                        <div className="text">
                                                UPCOMING PERFORMANCES/GIGS
                                        </div>
                                </a>
                                <a className="nav" href="#audition">
                                        <div className="text">
                                                AUDITION INFO
                                        </div>
                                </a>
                                <a className="nav" href="#contact">
                                        <div className="text">
                                                CONTACT
                                        </div>
                                </a>
                        </div>
                </div>
              
	);
	}
	
export default Navbar;