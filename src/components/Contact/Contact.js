import React from 'react';	
// import {Link} from 'react-router-dom';


import './Contact.css';

import facebook from '../media/facebook.svg';
import instagram from '../media/instagram.svg';
import twitter from '../media/twitter.svg';

	const Contact = () => {
	return(
	<div className='Contact'>
		<div className="Contact-Content">
			<div className='Contact-Header'>
				CONTACT US
			</div>
			Have any questions? Want to book us for a gig? Send all your inquiries to <a href="mailto:ontherocks@colorado.edu">ontherocks@colorado.edu</a>.
			<br></br>
			<br></br>
			You can also check us out on our Social Media!

			<div className="Contact-Icons">
			<a href='https://www.facebook.com/cuboulderontherocks/'>
				<img className="Contact-Icon" src={facebook} alt="facebook"></img>
			</a>
			<a href="https://instagram.com/cuboulderontherocks">
				<img className="Contact-Icon" src={instagram} alt="instagram"></img>
			</a>
			<a href="https://twitter.com/cuontherocks">
				<img className="Contact-Icon" src={twitter} alt="twitter"></img>
			</a>
			</div>
		</div>
	</div>
	
	);
	}
	
export default Contact;