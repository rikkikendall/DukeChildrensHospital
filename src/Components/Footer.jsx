import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Paper, Card } from '@material-ui/core/';

class Footer extends Component {
  render() {
    return (
      <footer className="App-header">
        <img src="http://d9hhrg4mnvzow.cloudfront.net/www.bluedevilsbirdiesforbabies.org/99ba4b3c-white-duke-cmn-double-logo_0go03y0go03y000000.png"
        width="400"
        height="100"/>
        <br />
        <Typography variant="inherit"> Created by Rikki Kendall (Web Design) <br /> Thea Dowrich (Pledge Donations), & Kelly Yang (Logo Designer) </Typography>
      </footer>
    );
  }
}

export default Footer;

export {
  Footer,
};
