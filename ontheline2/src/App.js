import React, { Component } from 'react';
import './App.css';

// import { connect } from "react-redux";
import LogIn from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import { } from './actions';
import JournalEntry from './components/JournalEntry';




class App extends Component {
 

    // componentDidMount() {

    // }



  render() {
    return (
      <div className="App">
      <NavBar />
      
      <Route  exact path='/' component={HomePage} />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/journalentry' component={JournalEntry} />


      
      </div>
    );
  }
}

// const mapStateToProps = state =>  ({
  
    
   
//   });



// export default connect(
//   mapStateToProps,
//    {  }
//  )(App);
 

export default (App);