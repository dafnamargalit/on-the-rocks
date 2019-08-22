import React from 'react';	
import mountains from '../media/mountain.png';
import icon from '../media/navbar.svg';

import './Navbar.css';
        

	export default class Navbar extends React.Component {
                menuOpen(){
                        var menu = document.querySelector(".Navbar-Links");
                         if( menu.style.display === 'flex'){
                                 menu.style.display = 'none';
                         }
                         else {
                                 menu.style.display = 'flex';
                         }
                }
                menuClose(){
                        var menu = document.querySelector(".Navbar-Links");
                        menu.style.display = 'none';
                }
                render(){
	return(
                <div className='Navbar'>
                <div className='side'>     
                </div>
                <img className='icon' src={icon} alt="icon" onClick={this.menuOpen}></img>   
                <a className='nav' href='#home'>
                        <img className='back-to-home' src={mountains} alt="mountains"></img>    
                </a>
                        <div className='Navbar-Links'>
                                <a className='nav' href='#home'>
                                        <div className="text" onClick={this.menuClose}>
                                                HOME
                                        </div>
                                </a>
                                <a className='nav' href='#about'>
                                        <div className="text" onClick={this.menuClose}>
                                                ABOUT
                                        </div>
                                </a>
                                <a className="nav" href="#meet-the-members">
                                        <div className="text" onClick={this.menuClose}>
                                                MEET THE MEMBERS
                                        </div>
                                </a>
                                <a className="nav" href="#music">
                                        <div className="text" onClick={this.menuClose}>
                                               OUR MUSIC
                                        </div>
                                </a>
                                <a className="nav" href="#gigs">
                                        <div className="text" onClick={this.menuClose}>
                                                UPCOMING PERFORMANCES/GIGS
                                        </div>
                                </a>
                                <a className="nav" href="#audition">
                                        <div className="text" onClick={this.menuClose}>
                                                AUDITION INFO
                                        </div>
                                </a>
                                <a className="nav" href="#contact">
                                        <div className="text" onClick={this.menuClose}>
                                                CONTACT
                                        </div>
                                </a>
                        </div>
                </div>
              
	);
        }
}
	