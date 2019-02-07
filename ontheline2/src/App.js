import React, { Component } from 'react';
import './App.css';

// import { connect } from "react-redux";
import LogIn from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
// import { } from './actions';
import JournalEntry from './components/JournalEntry';
import axios from 'axios';



class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: '',
    id: 0
  }

}




  render() {
    return (
      <div className="App">
      <Route  exact path='/' component={HomePage}  />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/journalentry' component={JournalEntry} />
     


      
      </div>
    );
  }
}


//  etUsers={this.getUsers}

export default (App);

// const mapStateToProps = state =>  ({
  
    
   
//   });



// export default connect(
//   mapStateToProps,
//    {  }
//  )(App);