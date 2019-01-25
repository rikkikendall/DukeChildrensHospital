import React, { Component } from 'react';
import windowSize from 'react-window-size';
import logo from './ks4cancerfinal.png';
import './App.css';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';
// import Components
import { Information } from './Components/Information';
import { AnimatedNumber } from './Components/AnimatedNumber';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Card>
          <img src= {logo}
          width="1000"
          height="400" />
        </Card>
        <Information />
        <Footer />
      </div>
    );
  }
}

export default windowSize(App);
