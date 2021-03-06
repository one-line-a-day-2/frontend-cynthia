import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink } from 'react-router-dom';


const styles = {
    palette: {
        backgroundColor: '#59e3bb',
        marginBottom: '40px'
    },
  root: {
    flexGrow: 1,
    
  },
  grow: {
    flexGrow: 1,
    color: 'black',
    fontSize: '25px',
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};



function NavBarLogin(props) {

   
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.palette} position="static">
        <Toolbar>
       
          <Typography variant="h6" color="inherit" className={classes.grow}>
          One-Line-a-Day-II
          </Typography>
          <NavLink style={{ color: 'white', textDecoration: 'none', padding: '10px' }} to='/login' color="inherit">Login</NavLink>
          <NavLink style={{ color: 'white', textDecoration: 'none', padding: '10px'}} to='/signup' color="inherit">Sign Up</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBarLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarLogin);
