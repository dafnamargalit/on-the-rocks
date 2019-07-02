import React from 'react';	
import logo from '../media/logo.png';


import './Home.css';
	
	const Home = () => {
	return(
		<div className='Home'>
			<img className='Home-Logo' src={logo} alt="logo"></img>
		</div>
	);
	}
	
export default Home;