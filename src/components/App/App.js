import React, {Component} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Gigs from '../Gigs';
import MTM from '../MTM';

import './App.css';


class App extends Component {
  render(){
  return (
    <ParallaxProvider>
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
        <ScrollableAnchor id={"gigs"}>
          <div className="Gigs">
            <Gigs/>
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
