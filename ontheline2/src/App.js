import React, { Component } from 'react';
import './App.css';


import LogIn from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/homepage/HomePage'
// import { fetchEntry } from './actions';
import { Route } from 'react-router-dom'
// import { connect } from "react-redux";
import JournalEntry from './components/homepage/JournalEntry';




class App extends Component {
  constructor(props){
    super(props); 
  }
  
// componentDidMount() {
//   this.props.fetchEntry();
//   console.log(this.props.fetchEntry())
// }


  render() {
    return (
      <div className="App">
      <Route  exact path='/'  component={HomePage}  />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/journalentry' component={JournalEntry} />
     


      
      </div>
    );
  }
}






// const mapStateToProps = state =>  ({
//   entries: state.entries,
//   fetchingEntry: state.fetchingEntry,
  
 
// });


export default App;
// export default connect(
//   mapStateToProps,
//    {  }
//  )(App);