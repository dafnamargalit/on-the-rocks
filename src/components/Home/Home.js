import React from 'react';	
import { ParallaxProvider } from 'react-scroll-parallax';
import logo from '../media/logo.png';
import Navbar from '../Navbar';
import About from '../About';

import './Home.css';
	
	const Home = () => {
	return(
	<ParallaxProvider>
	<div className="page">
	<Navbar/>
	<div className='Home'>
	<img className='logo' src={logo} alt="logo"></img>
	</div>
	<About></About>
	</div>
	</ParallaxProvider>
	);
	}
	
export default Home;