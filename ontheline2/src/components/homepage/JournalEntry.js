import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import NavBar from '../navbar/NavBar'

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
              input: '',
              
            }
      
       }
       
   handleChanges = e => {
    e.preventDefault(); 
    this.setState({ 
    [e.target.name]: e.target.value
})
}   

// addNewEntry= e =>  {
//     console.log(e)
//     e.preventDefault();
//     const endpoint = 'https://one-line-a-day-2.herokuapp.com/api/users/userID/entries';
//     axios
//     .post(endpoint)
//     .then(res => {
//         localStorage.getItem("jwt", res.data.token);
//         // this.setState({id})
//     })
//     .then(() => {
//         this.props.history.push("/");
//     })
//     .catch(err => {
//         console.log({ Error: err });
//     });
    
// }

// deleteEntry= e =>  {
//     console.log(e)
//     e.preventDefault();
//     const endpoint = 'https://one-line-a-day-2.herokuapp.com/api/users/userID/entries/entryID';
//     axios
//     .delete(endpoint)
//     .then(res => {
//         localStorage.setItem("jwt", res.data.token);
//         // this.setState({id})
//     })
//     .then(() => {
//         this.props.history.push("/");
//     })
//     .catch(err => {
//         console.log({ Error: err });
//     });
    
// }

// editEntry= e =>  {
//     console.log(e)
//     e.preventDefault();
//     const endpoint = 'https://one-line-a-day-2.herokuapp.com//api/users/userID/entries/entryID';
//     axios
//     .put(endpoint)
//     .then(res => {
//         localStorage.setItem("jwt", res.data.token);
//         // this.setState({id})
//     })
//     .then(() => {
//         this.props.history.push("/");
//     })
//     .catch(err => {
//         console.log({ Error: err });
//     });
    
// }
     

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
        <form className={styles.form} onSubmit={this.addNewEntry} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="entry">Title</InputLabel>
            <Input autoComplete='off' id="entry" name="entry" type="text" 
                value={this.state.entry}
                onChange={this.handleChanges} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="input">Input</InputLabel>
            <Input autoComplete='off' name="input" type="text" id="input" 
                value={this.state.input}
                onChange={this.handleChanges} />
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

export default JournalEntry;