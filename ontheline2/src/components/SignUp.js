// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { } from '../actions'

// class SignUp extends Component {
//     constructor(props) {
//       super(props);
  
//         this.state = {
//           username: '',
//           password: '',
//           firstName: '',
//           lastName: ''

//         }
//     }
  
//     handleSignUp = e => {
//         this.setState({[e.target.name]: e.target.value })
//         console.log(e)
//     }
  
//     addSignUp = e => {
//         console.log(this.state)
//         e.preventDefault();
//         // const userInfo = {
//         //     email: this.state.email,
//         //     password: this.state.password
        
//     }
  
//     render() {
//       return (

//             <div>
             
//             <form autoComplete='off' onSubmit={this.addSignUp}>

//             <input
//                 type="text" 
//                 placeholder="First Name" 
//                 name="firstName"
//                 value={this.state.firstName}
//                 onChange={this.handleSignUp}
//                  />

//                      <input
//                 type="text" 
//                 placeholder="Last Name" 
//                 name="lastName"
//                 value={this.state.lastName}
//                 onChange={this.handleSignUp}
//                  />

//                 <input
//                 type="text" 
//                 placeholder="username" 
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleSignUp}
//                  />

//                 <input
//                 type="password" 
//                 name="password"
//                 placeholder="password" 
//                 value={this.state.password}
//                 onChange={this.handleSignUp}
//                 />
//                 <button>Sign Up!</button>
//             </form>
          
//         </div>
   
//       );
//     }
//   }
  
  
  
  
//   const mapStateToProps = (state) => ({
//     errors: state.errors
// })

// export  default connect(mapStateToProps, {  })(SignUp)
  

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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
// import { renderComponent } from 'recompose';

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


class SignUp extends Component {
        constructor(props) {
          super(props);
            this.state = {
              email: '',
              password: '',
              firstName: '',
              lastName: ''
            }
      
       }
       handleSignUp = e => {
                this.setState({[e.target.name]: e.target.value })
                console.log(e)
            }
          
        addSignUp = e => {
                console.log(this.state)
                e.preventDefault();
                this.setState({
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: ''
                })
                // const userInfo = {
                //     email: this.state.email,
                //     password: this.state.password
                
            }

     

  render() {
   
  return ( 
    //   const {classes } = props;
    <main className={styles.main}>
      <CssBaseline />
      <Paper className={styles.paper} style={{width: '50%'}} margin="auto">
        <Avatar className={styles.avatar}  >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Sign Up
        </Typography>
        <form className={styles.form} onSubmit={this.addSignUp} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input autoComplete='off' id="name" name="firstName" type="text" 
                value={this.state.firstName}
                onChange={this.handleSignUp} autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input autoComplete='off' name="lastName" type="text" id="lastName" 
                value={this.state.lastName}
                onChange={this.handleSignUp} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input autoComplete='off' id="email" name="email" type="text" 
                value={this.state.email}
                onChange={this.handleSignUp} autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input autoComplete='off' name="password" type="password" id="password" 
                value={this.state.password}
                onChange={this.handleSignUp} />
          </FormControl>
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Sign Up!
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}
// LogIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SignUp);