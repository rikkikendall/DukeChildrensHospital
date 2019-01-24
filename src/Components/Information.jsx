import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Paper, Card, LinearProgress } from '@material-ui/core/';
// Video React Components
import ReactPlayer from 'react-player'
// Logos
import baseballlogo from './DukeBaseballLogo.jpg';
import softballlogo from './DukeSoftballLogo.jpg';
// import Components
import { DonorStepper } from './DonorStepper';
import { Donors } from './Donors';

class Information extends Component {
  render() {
    return (
      <div className="App">
        <Paper elevation={3} rounded="true">
          <br />
          <Typography variant="h1" component="h3">
            Strikeout Kids Cancer!
          </Typography>
          <Typography variant="h5" component="h2">
            Help us fundraise by pledging an amount for each strike out a Duke pitcher throws!
          </Typography>
          <br />
            <div align="center">
              <Card>
              <ReactPlayer url='https://youtu.be/nhStMOdMsX8' playing />
              <br />
              </Card>
            </div>
          <Paper>
            <Typography variant="display1" component="h3">
            Help the Duke Baseball & Softball teams strikeout children’s cancer by joining our team.
            </Typography>
            <br />
            <img src= { softballlogo }
              width="400"
              height="200"/>
            <Card style={{ background: '#C84E00' }}>
              <br />
              <Typography variant="h5" component="h3"> Total raised in the 2018-2019 season to date:
              </Typography>
              <br />
              <Typography variant="h2"> $7,434.50 </Typography>
              <br/>
              <LinearProgress color="secondary" />
              <br />
            </Card>
            <br />
            <img src= { baseballlogo }
              width="400"
              height="200"/>
            </Paper>
            <Card style={{ background: '' }}>
              <br />
              <Typography variant="h5" component="h3">
                Make a pledge for every strikeout Duke Pitchers rack up this season.
                <br />
                All funds go directly
                to support cancer research and patient care at Duke Children’s Hospital.
                <br />
                By filling out the form below, you can choose the level of your pledge or you can make a one-time donation.
                <br />
                Last season we threw 575 strikeouts in Baseball and 262 in Softball (95 in March).
                <br />
                We’re looking for more this year to help the kids.
                <br />
                <br />
              </Typography>
              <DonorStepper />
              <Donors />
              <br />
            </Card>
        </Paper>
      </div>
    );
  }
}

export default Information;

export {
  Information,
};
