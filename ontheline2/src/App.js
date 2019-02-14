import React, { Component } from 'react';
import './App.css';


import LogIn from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/homepage/HomePage'
// import JournalEntry from './components/homepage/JournalEntry'
import { Route } from 'react-router-dom'





class App extends Component {
  



  render() {
    return (
      <div className="App">
      <Route  exact path='/'  component={HomePage}  />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />
      {/* <Route path='/journalentry' component={JournalEntry} /> */}
     


      
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