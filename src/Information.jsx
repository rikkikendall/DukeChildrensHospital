import React, { Component } from 'react';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Card, CardActions, CardContent } from '@material-ui/core/';
// Video React Components
import ReactPlayer from 'react-player'

class Information extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default withStyles(styles)(Information);
