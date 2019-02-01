import React, { Component } from 'react';
// Material UI Components
import Typography from '@material-ui/core/Typography';
import { Card, Button } from '@material-ui/core/';
// Responsive
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class DonationForm extends Component {
  render() {
    return (
      <div className="App">
        <Desktop>
        <Card color="#001A57">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScgfDak6l_8T_EaX7osUl_hYEHE5jun1o1IxXksOdCOxDjj0w/viewform?embedded=true"
            width="700"
            height="1930"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0">Loading...</iframe>
          <Typography variant="display1"> Thank you for supporting Duke Children’s and Duke Baseball and Softball. </Typography>
          <br />
          <br />
        </Card>
        </Desktop>
        <Mobile>
          <Card>
          <br />
          <Button
              variant="contained"
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScgfDak6l_8T_EaX7osUl_hYEHE5jun1o1IxXksOdCOxDjj0w/viewform?embedded=true"> Click Here to Donate! </Button>
          <br />
          </Card>
        </Mobile>
      </div>
    );
  }
}

export default DonationForm;

export {
  DonationForm,
};
