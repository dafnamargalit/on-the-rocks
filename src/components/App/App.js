import React, {Component} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Music from '../Music';
import Contact from '../Contact';
import Gigs from '../Gigs';
import MTM from '../MTM';
import Audition from '../Audition';

import './App.css';


class App extends Component {
   preloader() {
    var i = 0;
    var imageObj = [];
   
    var images = [];
    images[0]="./media/aleix.jpg";
    images[1]="./media/caroline.png";
    images[2]="./media/dafna.png";
    images[3]="./media/emily.png";
    images[4]="./media/jenna.png";
    images[5]="./media/jolie.png";
    images[6]="./media/katie.png";
    images[7]="./media/kf.png";
    images[8]="./media/kyra.png";
    images[9]="./media/lila.png";
    images[10]="./media/maya.png";
    images[11]="./media/noopur.png";
    images[12]="./media/riley.png";
    images[13]="./media/rosie.png";
    images[14]="./media/us.jpg";
   
    for(i=0; i<images.length; i++) {
      var image = new Image();
      image.src = images[i]
      imageObj[imageObj.length] = image;
    }
  } 
  render(){
  return (
    <ParallaxProvider>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="App" onLoad="preloader()">
        <Navbar/>
        <ScrollableAnchor id={"home"}>
          <div className='Home'>
            <Home/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <div className="About">
            <About/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"meet-the-members"}>
          <div className="MTM">
            <MTM/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"music"}>
          <div className="Music">
            <Music/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"gigs"}>
          <div className="Gigs">
            <Gigs/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"audition"}>
          <div className="Audition">
            <Audition/>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
          <div className="Contact">
            <Contact/>
          </div>
        </ScrollableAnchor>
      </div>
    </ParallaxProvider>
  );
  }
}

export default App;
