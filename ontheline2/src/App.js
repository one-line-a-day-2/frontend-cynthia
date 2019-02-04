import React, { Component } from 'react';

import './App.css';
import { connect } from "react-redux";
import Login from './components/Login'
import { Route } from 'react-router-dom'
import { } from './actions';





class App extends Component {
  constructor(props){
    super(props); 
  
    
    
  }

    componentDidMount() {

    }



  render() {
    return (
      <div className="App">
      <h1>One-Line-a-DayII</h1>
      <Route path='/login' component={Login} />
      {/* <Route path='/' component={HomePage} /> */}


      
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
  
    
   
  });



export default connect(
  mapStateToProps,
   {  }
 )(App);
 
