import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
  render() {
    return (
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Grid container justify="center">
            <Typography variant="display1" color="inherit">
              Compare GitHub Repos
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
