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
  render(){
  return (
    <ParallaxProvider>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="App">
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
