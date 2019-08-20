import React from 'react';	
// import Parallax from '../Parallax';
import logo from '../media/logo.png';
// import ring from '../media/big-circle.png';
// import MainCircle from '../media/main-circle.png';
// import LowerMtn from '../media/lower-mountain.png';
// import UpperMtn from '../media/upper-mountain.png';


import './Home.css';
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const offset = getRandomInt(50, 150);

// const isSlower = getRandomInt(0, 1) ? true : false;

	const Home = () => {
	return(
		<div className='Home'>
			{/* <Parallax
            speed={10}
            zindex = "0"
            top = '20%'
            image = {ring}
            ></Parallax> */}
			<a href="#about"><img className="Home-Logo" src={logo} alt='logo'></img></a>
		</div>
	);
	}
	
export default Home;