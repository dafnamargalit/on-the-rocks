import React from 'react';	
import { Parallax } from 'react-scroll-parallax';
// import logo from '../media/logo.png';
import ring from '../media/big-circle.png';
import MainCircle from '../media/main-circle.png';
import LowerMtn from '../media/lower-mountain.png';
import UpperMtn from '../media/upper-mountain.png';


import './Home.css';
	
	const Home = () => {
	return(
		<div className='Home'>
			<div className='Home-Container'>
			<Parallax
                offsetYMin={-100}
                offsetYMax={100}
                className='ring'
            >
                <img className="Home-Outer" src={ring} alt='ring'/>
            </Parallax>
			<Parallax
                offsetYMin={-50}
                offsetYMax={50}
                className={'circle'}
            >
                 <img className="Home-Inner" src={MainCircle} alt='ring'/>
            </Parallax>
			</div>
		</div>
	);
	}
	
export default Home;