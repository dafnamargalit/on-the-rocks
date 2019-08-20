import React from 'react';	

import './Music.css';
import spotify from '../media/spotify.svg';
import itunes from '../media/itunes.svg';
import bc from '../media/bandcamp.svg';

	const Music = () => {
	return(
	<div className='Music'>
		<div className='Music-Header'>
			OUR MUSIC
		</div>
		<div className="Music-Content">
			<a href='https://open.spotify.com/artist/3yzcvwf68rlkUZN0tc7dMy'>
				<img className="Music-Icon" src={spotify} alt="spotify"></img>
			</a>
			<a href="https://cuontherocks.bandcamp.com/releases">
				<img className="Music-Icon" src={bc} alt="itunes"></img>
			</a>
			<a href="https://itunes.apple.com/us/artist/cu-on-the-rocks/943292015">
				<img className="Music-Icon" src={itunes} alt="itunes"></img>
			</a>
		</div>

	</div>
	
	);
	}
	
export default Music;