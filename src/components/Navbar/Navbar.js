import React from 'react';	
import mountains from '../media/mountain.png';
import icon from '../media/navbar.svg';

import './Navbar.css';
        

	export default class Navbar extends React.Component {
                constructor(props) {
                        super(props);
                        this.state = { width: 0, height: 0 };
                        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
                      }
                      
                      componentDidMount() {
                        this.updateWindowDimensions();
                        window.addEventListener('resize', this.updateWindowDimensions);
                      }
                      
                      componentWillUnmount() {
                        window.removeEventListener('resize', this.updateWindowDimensions);
                      }
                      
                      updateWindowDimensions() {
                        this.setState({ width: window.innerWidth, height: window.innerHeight });
                        var menu = document.querySelector(".Navbar-MobileLinks");
                        console.log(window.innerWidth);
                         if(window.innerWidth > 800){
                                 menu.style.display = 'none';
                         }
                      }
                menuOpen(){
                        var menu = document.querySelector(".Navbar-MobileLinks");
                        console.log(window.innerWidth);
                         if( menu.style.display === 'flex' || window.innerWidth > 800){
                                 menu.style.display = 'none';
                         }
                         else {
                                 menu.style.display = 'flex';
                         }
                }
                menuClose(){
                        var menu = document.querySelector(".Navbar-MobileLinks");
                        menu.style.display = 'none';
                }
                render(){
	return(
                <div className='Navbar'>
                <div className='side'>     
                </div>
                <img className='icon' src={icon} alt="icon" onClick={this.menuOpen} ></img>   
                <a className='nav' href='#home'>
                        <img className='back-to-home' src={mountains} alt="mountains"></img>    
                </a>
                        <div className='Navbar-MobileLinks'>
                                <a className='nav' href='#home' onClick={this.menuOpen}>
                                        <div className="text">
                                                HOME
                                        </div>
                                </a>
                                <a className='nav' href='#about'onClick={this.menuOpen} >
                                        <div className="text">
                                                ABOUT
                                        </div>
                                </a>
                                <a className="nav" href="#meet-the-members" onClick={this.menuOpen}>
                                        <div className="text">
                                                MEET THE MEMBERS
                                        </div>
                                </a>
                                <a className="nav" href="#music" onClick={this.menuOpen}>
                                        <div className="text">
                                               OUR MUSIC
                                        </div>
                                </a>
                                <a className="nav" href="#gigs" onClick={this.menuOpen}>
                                        <div className="text">
                                                UPCOMING PERFORMANCES/GIGS
                                        </div>
                                </a>
                                <a className="nav" href="#audition" onClick={this.menuOpen}>
                                        <div className="text">
                                                AUDITION INFO
                                        </div>
                                </a>
                                <a className="nav" href="#contact"  onClick={this.menuOpen}>
                                        <div className="text">
                                                CONTACT
                                        </div>
                                </a>
                        </div>
                        <div className='Navbar-Links'>
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
}
	