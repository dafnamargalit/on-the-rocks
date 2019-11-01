import React from 'react';	
import Modal from 'react-modal';

import './Gigs.css';

Modal.setAppElement('#root');

export default class Gigs extends React.Component{
	constructor(props) {
		super(props);

		this.exampleRef = React.createRef();

		this.state = {
		  modalIsOpen: false,
		  event: 'event',
		  time: 'time',
		  location: 'location'
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

	  concert_modal(){
		  this.openModal()
		  this.setState({event: 'FALL 2019 CONCERT', day: "Friday, December 6th", time: "7:00 PM", location: 'Old Main'});
	  }
	render(){
		return(
			<div className='Gigs'>
				<div className='Gig-Content'>
				<div className='Gigs-Header'>
					UPCOMING PERFORMANCES/GIGS
					<div className="Gigs-Subtitle">
						(click on a gig for more info)
					</div>
				</div>
				<div className='Gig' onClick={() => this.concert_modal()}>
					2019 FALL CONCERT
				</div>
				</div>
				<Modal
						isOpen={this.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.closeModal}
						className="Gig-Modal"
						overlayClassName="Gig-Overlay"
						contentLabel="Modal"
						disableAutoFocus={true}
						ref={this.exampleRef}
						>
						<div className="Gig-Modal-Content">
							<div className="Gig-Container">
								{this.state.event}
							</div> 
							<div className="Gig-Description">
								{this.state.day}
								<br></br>
								{this.state.time}
								<br></br>
								{this.state.location}
							</div>
							<div className="Gig-Container">
							<button className="Gig-Button" onClick={this.closeModal}> Close </button>
							</div>
						</div>
						</Modal>
			</div>
			
			);
	}
	}
	