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
			   ABOUT
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
		   On the Rocks has been singing proudly at CU since 2005, and we are a tight-knit group that laughs and loves as hard as we practice. 
		   We specialize in songs that are sung “acapella“, meaning “without instrumental accompaniment”. For a sample of our sound, take a look at our current set list.
		   As we are made up of 100% CU students, we see a lot of members come and go through the years, and our sound develops and changes with each new member. 
		   When we lose any of our beloved members to their graduation date, we hold auditions to gather new girls. 
		   For more information on how to join us, see our Audition Information. We are always looking out for new voices!
		   <br></br>
		   <br></br>
		   We have two large concerts a year, our Fall Concert during the fall semester and our Spring Concert during, you guessed it, the spring semester. However, those are far from the only instances where you’ll find us singing! We have multiple performances throughout each semester for a multitude of venues, from small CU events to the annual a cappella celebration at Acapalooza. We will also sing at weddings, birthdays, or any special event on or off campus. 
		   For more information on booking a gig with us, please see our Contact Us section!
		   <br></br>
		   <br></br>
		   So while you’re here, indulge your ears, because everything’s better On the Rocks!
		</div>
	</div>
	</div>
	
	);
	}
	
export default About;