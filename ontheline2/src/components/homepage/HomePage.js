import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Entry from '../homepage/Entry'
import { connect } from 'react-redux';
import { fetchEntry, deleteEntry ,editEntry} from '../../actions'
// import JournalEntry from './JournalEntry';

class HomePage extends Component {
    constructor(props) {
        super(props);
          
    
     }

componentDidMount() {
    this.props.fetchEntry(this.props.userId);
}

deleteEntry = (e , entryId) => {
    e.preventDefault();
    this.props.deleteEntry(this.props.userId, entryId)
  }
  
  editEntry = ( entryId ) => {
    //   e.preventDefault();
      this.props.editEntry(this.props.userId, entryId, {
      entry: this.props.entry,
      user_id: this.props.userId
      });
    this.props.fetchEntry();
    this.props.history.push("/journalentry");
}


//   addEntry = e => {
//     e.preventDefault();
//    if (this.props.edit) {
//     this.editEntry(this.props.userId, this.props.match.params.entryId, {
//       entry: this.props.entry,
//       user_id: this.props.userId
//     });
//   } else {
//     this.addNewEntry(this.props.userId, {
//       entry: this.props.entry,
//       user_id: this.props.userId
//     });
//   }
//   this.props.fetchEntry();
//   this.props.history.push("/");
//   };
  

    render() {
        return (
        <div className="cards">
        <NavBar />
        {/* <JournalEntry /> */}
        <Entry entries={this.props.entries} editEntry={this.editEntry} deleteEntry={this.deleteEntry}/>
        </div>
    );
  };
}


const mapStateToProps = state => {
    return {
        fetchEntries: state.fetchEntries,
        entries: state.entries,
        userId: state.userId,
        deleteEntries: state.deleteEntries,
        editEntry: state.editEntry,
        isEditing: state.isEditing
    }
}
 export default connect(mapStateToProps, 
    {fetchEntry, deleteEntry, editEntry})
    (HomePage)