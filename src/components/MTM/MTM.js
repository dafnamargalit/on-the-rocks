import React from 'react';	
import Modal from 'react-modal';
// import ReactDOM from "react-dom";

import kyra from '../media/kyra.png';
import dafna from '../media/dafna.png';
import michelle from '../media/michelle.png';
import katie from '../media/katie.png';
import jenna from '../media/jenna.png';
import riley from '../media/riley.png';
import aleix from '../media/aleix.png';
import emily from '../media/emily.png';
import kf from '../media/kf.png';
import maya from '../media/maya.png';
import noopur from '../media/noopur.png';
import caroline from '../media/caroline.png';


import './MTM.css';
// const customStyles = {
// 	content : {
// 	  top                   : '50%',
// 	  left                  : '50%',
// 	  right                 : 'auto',
// 	  bottom                : 'auto',
// 	  marginRight           : '-50%',
// 	  transform             : 'translate(-50%, -50%)'
// 	}
//   };



  Modal.setAppElement('#root');

	export default class MTM extends React.Component {
		constructor(props) {
			super(props);

			this.exampleRef = React.createRef();

			this.state = {
			  modalIsOpen: false,
			  name: 'name',
			  image: kyra,
			  description: 'test'
			};
		
			this.openModal = this.openModal.bind(this);
			// this.afterOpenModal = this.afterOpenModal.bind(this);
			this.closeModal = this.closeModal.bind(this);
		  }
		
		  openModal() {
			this.setState({modalIsOpen: true});
		  }
		
		
		  closeModal() {
			this.setState({modalIsOpen: false});
		  }

		  kyra_modal(){
			this.setState({name: "Kyra Mowbray"});
			this.setState({image: kyra});
			this.setState({description: "Kyra, our president, is the coolest girl you’ll ever come across! This California girl comes from a musical theater background, can belt like no other, and makes us all smile while leading the group in stride. Do you hear a rich, deep sound in our ensemble? Then you might be hearing Kyra’s lovely voice! Some fun facts: this gal has a twin sister, is majoring in elementary education and has traveled all around the world. We are so lucky to have you, Kyra!"});
			this.openModal();
		  }
	
		  dafna_modal(){
			this.setState({name: "Dafna Margalit"});
			this.setState({description: "Picture this— its 2025 and this scary talented singer/songwriter with a spunk like you’ve never seen before is casually taking the music scene by storm. Her old OTR pals drop her name on the streets and say “oh yeah, I used to harmonize with that legend back in Boulder.” Wake up…that future legend is our OTR Music Director (and creator of this website), Dafna! Her song writing ability and unique tone (as well as her software development skills) are known to bring her fellow OTR members to tears."});
			this.setState({image: dafna});
			this.openModal();
		  }

		  michelle_modal(){
			this.setState({name: "Michelle Piccone"});
			this.setState({description: "Meet Michelle: a super funny, talented senior that will WOW you with her vocals. When this girl isn’t wowing you with her beautiful, strong vocals, she will be making you laugh due to her bubbly and infectious personality. Not only that, Michelle is our lovely treasurer: you can bet your bottom dollar that we won’t ever reach our bottom dollar with Michelle as treasurer. We are so lucky to have Michelle in the group!"});
			this.setState({image: michelle});
			this.openModal();
		  }

		  katie_modal(){
			this.setState({name: "Katie Lavey"});
			this.setState({description: "If you ever are in need of a good laugh, Katie Lavey is your girl. Not only is Katie our in house Amy Poehler, but our sweet soprano also has a laugh that can brighten up any room. She is definitely the only person we can think of that could pull of velcro tennis-shoes, so that pretty much sums up how much we all want to be Katie when we grow up. Katie is also a QUEEN when it comes to everything to do with branding and marketing: as OTR’s marketing head, Katie is behind everything that has to do with the OTR brand."});
			this.setState({image: katie});
			this.openModal();
		  }

		  jenna_modal(){
			this.setState({name: "Jenna Snyder"});
			this.setState({description: "Ms. Jenna is one spicy sophisticated junior at CU! She is a one of a kind gal with her beautiful smile, incredible dance moves and her amazing talent for telling the best stories. With her kindness, infectious laughter, and witty charm, she’ll brighten up anyone’s day! Jenna is also a business LEGEND. She is the smartest, busiest, most hardworking person you'll ever meet and OTR is lucky to have her!"});
			this.setState({image: jenna});
			this.openModal();
		  }

		  riley_modal(){
			  this.setState({name: "Riley Blackwood"});
			  this.setState({description: "This spunky, sweet gal has been singing with On the Rocks since she was just a little freshman. Riley is one smart girlie; she’s studying psychology and history with a certificate in applied care. When Riley isn’t studying she can be found making pumpkins spice lattes at Starbucks or riffing Ariana Grande tunes. We love this girl and are so excited to see what the world has in store for her."});
			  this.setState({image: riley});
			  this.openModal();
		  }

		  aleix_modal(){
			this.setState({name: "Aleix Lyon"});
			this.setState({description: "Meet sweet Aleix! This girl has rhythm, personality, spunk, charm, and kindness that instantly brightens the room. She’s quick to learn our songs and can pick up any tune instantly. Catch this girl singing soprano at many of our concerts to come!" });
			this.setState({image: aleix});
			this.openModal();
		  }

		  emily_modal(){
			this.setState({name: "Emily Miller"});
			this.setState({description: "This is Emily Miller! She is sweet and sassy, and takes our breath away with her perfect soprano voice! (Just listen to her sing Alaska at our next concert and you’ll get it) Emily is in CU Greek Life, she’s studying Integrated Physiology, and if you hang out with her long enough, you’ll also get to know her famous in boulder dad: RON (Hi, Ron! Sending so much love from OTR)"});
			this.setState({image: emily});
			this.openModal();
		  }

		  kf_modal(){
			this.setState({name: "Katie Faith Leonard"});
			this.setState({description: "Meet Katie Faith, the kindest, funniest, and most hardworking QUEEN with the sweetest voice. You having a bad day? As soon as Katie Faith is by your side, your whole mood will change for the better. We are so lucky to have such a talented and wonderful person in our group!" });
			this.setState({image: kf});
			this.openModal();
		  }

		  maya_modal(){
			this.setState({name: "Maya Shrestha",image: maya});
			this.setState({description: "We are beyond lucky to have Maya in OTR! Best known as our beatbox QUEEN, you can catch her dropping some sick beats. Maya is not only a ball of spunk, but she is a great mentor when it comes to helping others with keeping beat. And as some may know, Maya may weave some fantastic Star Wars references throughout rehearsal ;-). Without her we would not be where we are now!" });
			this.openModal();
		  }

		  noopur_modal(){
			this.setState({name: "Noopur Naik",image: noopur});
			this.setState({description: "Just WAIT until you hear the smooth, luxurious voice that emanates from Noopur’s mouth. Noopur’s voice will surely make you melt at each and every one of our concerts. Noopur can whip out a hilarious story on any occasion and make us all collapse from laughter. She juggles all the responsibilities in life like its a walk in the park, and she never fails to bring a warm smile to rehearsal."});
			this.openModal();
		  }

		  caroline_modal(){
			this.setState({name: "Caroline Thomson",image: caroline});
			this.setState({description: "Caroline has got a beautiful voice and an attitude to match. Seriously, this girl comes in each day with a smile on her face, and gets right down to business memorizing complicated acapella songs in minutes! We’re so glad she’s part of the team and excited to keep singing with her!"});
			this.openModal();
		  }

		  render(){
			return(
				<div className='MTM'>
					<div className='MTM-Header'>
						MEET THE MEMBERS
					</div>
					<div className='MTM-Members'>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={kyra} alt="kyra" onClick={() => this.kyra_modal()}></img>
							<div className="MTM-Container">
								Kyra Mowbray
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={dafna} alt="dafna" onClick={() => this.dafna_modal()}></img>
							<div className="MTM-Container">
									Dafna Margalit
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={michelle} alt="michelle" onClick={() => this.michelle_modal()}></img>
							<div className="MTM-Container">
									Michelle Piccone
							</div>
						</div>
					</div>
					<div className='MTM-Members'>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={katie} alt="katie" onClick={() => this.katie_modal()}></img>
							<div className="MTM-Container">
									Katie Lavey
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={jenna} alt="jenna" onClick={() => this.jenna_modal()}></img>
							<div className="MTM-Container">
									Jenna Snyder
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={riley} alt="riley" onClick={() => this.riley_modal()}></img>
							<div className="MTM-Container">
									Riley Blackwood
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={aleix} alt="aleix" onClick={() => this.aleix_modal()}></img>
							<div className="MTM-Container">
									Aleix Lyon
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={emily} alt="emily" onClick={() => this.emily_modal()}></img>
							<div className="MTM-Container">
									Emily Miller
							</div>
						</div>
					</div>

					<div className='MTM-Members'>
						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={kf} alt="kf" onClick={() => this.kf_modal()}></img>
							<div className="MTM-Container">
									Katie Faith Leonard
							</div>
						</div>

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={maya} alt="maya" onClick={() => this.maya_modal()}></img>
							<div className="MTM-Container">
									Maya Shrestha
							</div>
						</div>

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={noopur} alt="noopur" onClick={() => this.noopur_modal()}></img>
							<div className="MTM-Container">
									Noopur Naik
							</div>
						</div>


						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={caroline} alt="caroline" onClick={() => this.caroline_modal()}></img>
							<div className="MTM-Container">
									Caroline Thomson
							</div>
						</div>
					</div>
					
					<Modal
						isOpen={this.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.closeModal}
						className="MTM-Modal"
						overlayClassName="MTM-Overlay"
						contentLabel="Modal"
						disableAutoFocus={true}
						ref={this.exampleRef}
						>
						<div className="MTM-Modal-Content">
							<div className="MTM-Container">
								<img className='MTM-Person-desc' src={this.state.image} alt='person'></img>
							</div>
							<div className="MTM-Container">
								{this.state.name}
							</div>
							<div className="MTM-Description">
								{this.state.description}
							</div>
							<div className="MTM-Container">
							<button className="MTM-Button" onClick={this.closeModal}> Close </button>
							</div>
						</div>
						</Modal>
				</div>
				
				);
		  }
	
	}
	
