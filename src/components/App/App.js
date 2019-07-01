import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Gigs from '../Gigs';
import MTM from '../MTM';

import './App.css';


class App extends Component {
  render(){
  return (
    <Router>
      <div className='App'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/meet-the-members' component={MTM}/>
      <Route exact path='/gigs' component={Gigs}/>
      <Route exact path='/contact' component={Contact}/>
      </div>
    </Router>
  );
  }
}

export default App;
