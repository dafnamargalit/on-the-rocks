import React from 'react';	
// import Navbar from '../Navbar';
// import {Link} from 'react-router-dom';

import group from '../media/us.jpg';

import './About.css';
	
	const About = () => {
	return(
	<div className='About'>
	{/* <Navbar/> */}
	<div className='About-Content'>
	<img className='About-Image' src={group} alt="us"/>
   		<div className='About-Description'>
		   <header className='About-Header'>
			   About
		   </header>
		   <br></br>
		   Welcome to the official website of On the Rocks, CU Boulder’s one and only all women’s acapella group! 
		   <br></br>
		   Have you heard a siren’s song up on the Flatirons? Or a beautiful tune floating down Pearl Street?
		   <br></br>
		   <br></br>
		   Well, that may have been us!
		   <br></br>
		   <br></br>
		   On the Rocks has been singing proudly at CU since 2005, and we are a tight-knit group that laughs and loves as hard as we practice. Our love for singing is what truly keeps the group so strong, and we hope to share that with all of you!
		</div>
	</div>
	</div>
	
	);
	}
	
export default About;