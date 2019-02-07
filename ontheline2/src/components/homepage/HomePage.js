import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Entry from '../homepage/Entry'


const HomePage = props => {
    return (
      <div className="cards">
      <NavBar />
        {/* {props.entries.map(entry => {
          return <Entry  key={entry.id} entry={entry}  />;
        })} */}
      </div>
    );
  };
  
  export default HomePage;