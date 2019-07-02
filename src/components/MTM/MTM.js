import React from 'react';	
import ReactDOM from "react-dom";

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
import gretchen from '../media/gretchen.png';
import bitch from '../media/bitch.png';


import './MTM.css';
	
	const MTM = () => {
		function kyra_modal(){
		console.log('kyra');
		}
		function dafna_modal(){
			console.log('dafna');
		}
		function michelle_modal(){
			console.log('michelle');
		}
		function katie_modal(){
			console.log('katie');
		}
		function jenna_modal(){
			console.log('jenna');
		}
		function riley_modal(){
			console.log('riley');
		}
		function aleix_modal(){
			console.log('aleix');
		}
		function emily_modal(){
			console.log('emily');
		}
		function kf_modal(){
			console.log('kf');
		}
		function maya_modal(){
			console.log('maya');
		}
		function noopur_modal(){
			console.log('noopur');
		}
		function gretchen_modal(){
			console.log('gretchen');
		}
		function bitch_modal(){
			console.log('bitch');
		}
	return(
	<div className='MTM'>
		<div className='MTM-Header'>
			MEET THE MEMBERS
		</div>
		<div className='MTM-Members'>
			<img className='MTM-Person' src={kyra} alt="kyra" onClick={() => kyra_modal()}></img>
			<img className='MTM-Person' src={dafna} alt="dafna" onClick={() => dafna_modal()}></img>
			<img className='MTM-Person' src={michelle} alt="michelle" onClick={() => michelle_modal()}></img>
		</div>
		<div className='MTM-Members'>
			<img className='MTM-Person' src={katie} alt="katie" onClick={() => katie_modal()}></img>
			<img className='MTM-Person' src={jenna} alt="jenna" onClick={() => jenna_modal()}></img>
			<img className='MTM-Person' src={riley} alt="riley" onClick={() => riley_modal()}></img>
			<img className='MTM-Person' src={aleix} alt="aleix" onClick={() => aleix_modal()}></img>
			<img className='MTM-Person' src={emily} alt="emily" onClick={() => emily_modal()}></img>
		</div>
		<div className='MTM-Members'>
			<img className='MTM-Person' src={kf} alt="kf" onClick={() => kf_modal()}></img>
			<img className='MTM-Person' src={maya} alt="maya" onClick={() => maya_modal()}></img>
			<img className='MTM-Person' src={noopur} alt="noopur" onClick={() => noopur_modal()}></img>
			<img className='MTM-Person' src={gretchen} alt="gretchen" onClick={() => gretchen_modal()}></img>
			<img className='MTM-Person' src={bitch} alt="caroline" onClick={() => bitch_modal()}></img>
		</div>

		<div className='MTM-Kyra'>
			Kyra
		</div>
	</div>
	
	);
	}
	
export default MTM;