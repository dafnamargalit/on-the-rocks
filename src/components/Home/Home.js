import React from 'react';	
import logo from '../media/logo.png';
import Navbar from '../Navbar';

import './Home.css';
	
	const Home = () => {
	return(
	<div className="page">
	<Navbar/>
	<div className='Home'>
	<img className='logo' src={logo} alt="logo"></img>
	</div>
	</div>
	);
	}
	
export default Home;