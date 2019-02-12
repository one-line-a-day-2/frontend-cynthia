import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Entry from '../homepage/Entry'
import { connect } from 'react-redux';
import { fetchEntry, deleteEntry } from '../../actions'


class HomePage extends Component {


componentDidMount() {
    this.props.fetchEntry(this.props.userId);
}

deleteEntry = (e , entryId) => {
    e.preventDefault();
    this.props.deleteEntry(this.props.userId, entryId)
  }
  

    render() {
        return (
        <div className="cards">
        <NavBar />
        <Entry entries={this.props.entries}  deleteEntry={this.deleteEntry}/>
        </div>
    );
  };
}


const mapStateToProps = state => {
    return {
        fetchEntries: state.fetchEntries,
        entries: state.entries,
        userId: state.userId,
        deleteEntries: state.deleteEntries
    }
}
 export default connect(mapStateToProps, 
    {fetchEntry, deleteEntry})
    (HomePage)