import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';
import NavBar from '../navbar/NavBar'
import {addNewEntry, fetchEntry} from '../../actions'
import { connect } from "react-redux";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class JournalEntry extends Component {
        constructor(props) {
          super(props);
            this.state = {
              entry: '',
              
            }
      
       }
       
   handleChanges = e => {
    e.preventDefault(); 
    this.setState({ 
    [e.target.name]: e.target.value
})
}   

addEntry = e => {
  e.preventDefault();
  this.props.addNewEntry(this.props.userId, {
    entry: this.state.entry,
    user_id: this.props.userId
  });
  this.props.fetchEntry();
  this.props.history.push("/");
}



  render() {
   
  return ( 
    //   const {classes } = props;
    <main className={styles.main}>
     <NavBar />
      <CssBaseline />
      <Paper className={styles.paper}  style={{margin: '50px'}} >
     
        <Typography component="h1" variant="h5" >
          Journal Entry
        </Typography>

        <form className={styles.form} onSubmit={this.addEntry} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="entry">Start your daily entry...</InputLabel>
            <Input autoComplete='off' id="entry" name="entry" type="text" 
                value={this.state.entry}
                onChange={this.handleChanges} autoFocus />
          </FormControl>
        
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Enter
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

const mapStateToProps = state => {
  return {
      fetchEntries: state.fetchEntries,
      entries: state.entries,
      userId: state.userId
  }
}
export default connect(mapStateToProps, 
  {addNewEntry, fetchEntry})
  (JournalEntry)