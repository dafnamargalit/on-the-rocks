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
	<header className='About-MobileHeader'>
			   ABOUT
	</header>
	<img className='About-Image' src={group} alt="us"/>
   		<div className='About-Description'>
		   <header id="desktop-header" className='About-Header'>
			   ABOUT
		   </header>
		   <br id="desktop-break"></br> 
		   Welcome to the official website of On the Rocks, CU Boulder’s one and only all women’s acapella group! 
		   Have you heard a siren’s song up on the Flatirons? Or a beautiful tune floating down Pearl Street?
		   <br></br>
		   <br></br>
		   Well, that may have been us!
		   <br></br>
		   <br></br>
		   On the Rocks has been singing proudly at CU since 2005, and we are a tight-knit group that laughs and loves as hard as we practice. 
		   As we are made up of 100% CU students, we see a lot of members come and go through the years, and our sound develops and changes with each new member. 
		   When we lose any of our beloved members to their graduation date, we hold auditions to gather new girls. 
		   For more information on how to join us, see <a href="#audition">Audition Information</a>. We are always looking out for new voices!
		   <br></br>
		   <br></br>
		   So while you’re here, indulge your ears, because everything’s better On the Rocks!
		</div>
	</div>
	</div>
	
	);
	}
	
export default About;