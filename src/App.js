import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, Button, IconButton, Paper, Card, CardActions, CardContent } from '@material-ui/core/';
// Video React Components
import ReactPlayer from 'react-player';
// import Components

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <img src="http://d9hhrg4mnvzow.cloudfront.net/www.bluedevilsbirdiesforbabies.org/99ba4b3c-white-duke-cmn-double-logo_0go03y0go03y000000.png" />
            </Toolbar>
          </AppBar>
        </div>
        <img src="https://www.glennon.org/wp-content/uploads/sites/2/2017/02/2017_k4k_horiz-1000.png" alt="lg" />
        <Paper elevation={3} rounded="true">
         <br />
          <Typography variant="h5" component="h3">
            Strike Out Kids Cancer!
          </Typography>
          <Typography component="p">
            Help us fundraise by pledging an amaound for each strike out a Duke pitcher throws!
          </Typography>
          <br />
          <div align="center">
            <ReactPlayer url='https://youtu.be/B8D_tyuSXZU' />
          </div>
          <br />
          <Card color="#001A57">
            <h1>  Total raised in the 2018-2019 season to date: $7,434.50
            </h1>
          </Card>
        </Paper>
        <Card color="#001A57">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScgfDak6l_8T_EaX7osUl_hYEHE5jun1o1IxXksOdCOxDjj0w/viewform?embedded=true"
          width="700"
          height="2017"
          frameborder="0"
          marginheight="0"
          marginwidth="0">Loading...</iframe>
        </Card>
        <header className="App-header">
        <img src="http://d9hhrg4mnvzow.cloudfront.net/www.bluedevilsbirdiesforbabies.org/99ba4b3c-white-duke-cmn-double-logo_0go03y0go03y000000.png" />
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
