import React from 'react';	
import Modal from 'react-modal';
// import ReactDOM from "react-dom";

import dafna from '../media/dafna.png';
import kf from '../media/kf.png';
import maya from '../media/maya.png';
import caroline from '../media/caroline.png';
import lila from '../media/lila.png';
import amrita from '../media/amrita.png';
import bri from '../media/bri.png';
import charity from '../media/charity.png';
import georgie from '../media/georgie.png';
import margaux from '../media/margaux.png';
import melissa from '../media/melissa.png';
import sophie from '../media/sophie.png';
import paige from '../media/paige.png';

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
			  image: dafna,
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
	
		  dafna_modal(){
			this.setState({name: "Dafna Margalit"});
			this.setState({description: "Picture this— its 2025 and this scary talented singer/songwriter with a spunk like you’ve never seen before is casually taking the music scene by storm. Her old OTR pals drop her name on the streets and say “oh yeah, I used to harmonize with that legend back in Boulder.” Wake up… that future legend is our OTR Music Director, Dafna! Her song writing ability and unique tone (as well as her software development skills) are known to bring her fellow OTR members to tears."});
			this.setState({image: dafna});
			this.openModal();
		  }

		  kf_modal(){
			this.setState({name: "Katie Faith Leonard"});
			this.setState({description: "Meet Katie Faith, our president, the kindest, funniest, and most hardworking QUEEN with the sweetest voice. You having a bad day? As soon as Katie Faith is by your side, your whole mood will change for the better. We are so lucky to have such a talented and wonderful person in our group!" });
			this.setState({image: kf});
			this.openModal();
		  }

		  maya_modal(){
			this.setState({name: "Maya Shrestha",image: maya});
			this.setState({description: "We are beyond lucky to have Maya in OTR! Best known as our beatbox QUEEN, you can catch her dropping some sick beats. Not only that, Maya is our lovely treasurer: you can bet your bottom dollar that we won’t ever reach our bottom dollar with Maya as treasurer. And as some may know, Maya may weave some fantastic Star Wars references throughout rehearsal ;-). Without her we would not be where we are now!" });
			this.openModal();
		  }

		  caroline_modal(){
			this.setState({name: "Caroline Thomson",image: caroline});
			this.setState({description: "Caroline has got a beautiful voice and an attitude to match. Seriously, this girl comes in each day with a smile on her face, and gets right down to business memorizing complicated acapella songs in minutes! We’re so glad she’s part of the team and excited to keep singing with her!"});
			this.openModal();
		  }

		  lila_modal(){
			this.setState({name: "Lila Spurgeon", image: lila});
			this.setState({description: "With a voice that is so beautiful you might pass out when you hear it, matched with the sweetest and spunkiest personality, we are so thankful that Lila is a part of the group."});
			this.openModal();
		  }

		  amrita_modal(){
			  this.setState({name: "Amrita Purkayastha", image: amrita});
			  this.setState({description: "Amrita's lovely, rich voice and her kind attitude and funny quips are what make OTR truly OTR!"})
			  this.openModal();
		  }

		  paige_modal(){
			this.setState({name: "Paige Weimer", image: paige});
			this.setState({description: "Paige is one of the smartest and talented musicians you'll ever come across, and we are so lucky to have her in the group!"})
			this.openModal();
		  }

		  melissa_modal(){
			this.setState({name: "Melissa Pinkner", image: melissa});
			this.setState({description: "Melissa is such a kind and generous person, paired with an absolutely stunning voice that makes us so thankful that she joined our group."})
			this.openModal();
		  }

		  bri_modal(){
			this.setState({name: "Brianna Johnson", image: bri});
			this.setState({description: "Brianna is one of five of our newest members! She has an INSANE voice and an amazing personality and we are so excited to have her join us!"})
			this.openModal();
		  }

		  charity_modal(){
			this.setState({name: "Charity Luce", image: charity});
			this.setState({description: "Charity is one of five of our newest members! Her sweet voice and personality are exactly what OTR is all about."})
			this.openModal();
		  }

		  georgie_modal(){
			this.setState({name: "Georgie Armatas", image: georgie});
			this.setState({description: "Georgie is one of five of our newest members! Georgie's kind presence and luscious vocals are a wonderful addition to the group."})
			this.openModal();
		  }

		  margaux_modal(){
			this.setState({name: "Margaux Reifman", image: margaux});
			this.setState({description: "Margaux is one of five of our newest members! Along with her beautiful voice, Margaux also writes songs and we are so excited to have her in the group!"})
			this.openModal();
		  }

		  sophie_modal(){
			this.setState({name: "Sophie Choubai", image: sophie});
			this.setState({description: "Sophie is one of five of our newest members! Sophie's kindness, breathtaking voice and hardwork ethic are some of the many wonderful reasons we are so excited she joined OTR."})
			this.openModal();
		  }

		  render(){
			return(
				<div className='MTM'>
					<div className='MTM-Header'>
						MEET THE MEMBERS
						<br></br>
						<div className="MTM-Subtitle">
						(click on a member to learn more about them!)
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
							<img className='MTM-Person' src={dafna} alt="dafna" onClick={() => this.dafna_modal()}></img>
							<div className="MTM-Container">
									Dafna Margalit
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={maya} alt="maya" onClick={() => this.maya_modal()}></img>
							<div className="MTM-Container">
									Maya Shrestha
							</div>
						</div>
					</div>
					<div className='MTM-Members'>
					<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={caroline} alt="caroline" onClick={() => this.caroline_modal()}></img>
							<div className="MTM-Container">
									Caroline Thomson
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={lila} alt="lila" onClick={() => this.lila_modal()}></img>
							<div className="MTM-Container">
									Lila Spurgeon
							</div>
						</div>
					<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={amrita} alt="amrita" onClick={() => this.amrita_modal()}></img>
							<div className="MTM-Container">
									Amrita Purkayastha
							</div>
						</div>
						<div className='MTM-Person-Container'>
							<img className='MTM-Person' src={melissa} alt="melissa" onClick={() => this.melissa_modal()}></img>
							<div className="MTM-Container">
									Melissa Pinkner
							</div>
						</div>
					<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={paige} alt="paige" onClick={() => this.paige_modal()}></img>
							<div className="MTM-Container">
									Paige Weimer
							</div>
						</div>
					</div>

					<div className='MTM-Members'>
												

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={bri} alt="bri" onClick={() => this.bri_modal()}></img>
							<div className="MTM-Container">
									Brianna Johnson
							</div>
						</div>

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={charity} alt="charity" onClick={() => this.charity_modal()}></img>
							<div className="MTM-Container">
									Charity Luce
							</div>
						</div>


						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={georgie} alt="georgie" onClick={() => this.georgie_modal()}></img>
							<div className="MTM-Container">
									Georgie Armatas
							</div>
						</div>

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={margaux} alt="margaux" onClick={() => this.margaux_modal()}></img>
							<div className="MTM-Container">
									Margaux Reifman
							</div>
						</div>

						<div className='MTM-Person-Container'>
						<img className='MTM-Person' src={sophie} alt="sophie" onClick={() => this.sophie_modal()}></img>
							<div className="MTM-Container">
									Sophie Choubai
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
	
