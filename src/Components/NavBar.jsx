import React, { Component } from 'react';
// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Grid, Menu, MenuItem, AppBar, Toolbar, Button, IconButton, Paper, Card } from '@material-ui/core/';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ background: '#262626' }}>
          <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs>
              <img src="http://d9hhrg4mnvzow.cloudfront.net/www.bluedevilsbirdiesforbabies.org/99ba4b3c-white-duke-cmn-double-logo_0go03y0go03y000000.png"
              width="400"
              height="100" />
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs>
                <br />
                <br />
                <a  href="mailto:debra.l.taylor@duke.edu">
                  <Button
                    variant="outlined"
                    color="secondary"
                  >
                    Contact Us
                  </Button>
                  </a>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);

export {
  NavBar,
};
