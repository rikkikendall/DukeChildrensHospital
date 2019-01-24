import React, { Component } from 'react';
import logo from './ks4cancerfinal.png';
import './App.css';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/';
// import Components
import { Information } from './Components/Information';
import { AnimatedNumber } from './Components/AnimatedNumber';
import { DonationForm } from './Components/DonationForm';
import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 15,
  },
};

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
        <DonationForm />
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
