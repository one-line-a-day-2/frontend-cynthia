import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Entry from '../homepage/Entry'
import { connect } from 'react-redux';
import { fetchEntry, deleteEntry ,editEntry, addNewEntry} from '../../actions'
import JournalForm from './JournalForm';

class HomePage extends Component {
    constructor(props) {
        super(props);
          this.state = {
            isEditing: false,
            entry: '',
            activeEntry: null
          }
    
     }

componentDidMount() {
    console.log(this.props.userId)
    this.props.fetchEntry(this.props.userId);
}

handleChanges = e => {
    this.setState({
        ...this.state,
      [e.target.name]: e.target.value
    });
  };

deleteEntry = (e , entryId) => {
    e.preventDefault();
    this.props.deleteEntry(this.props.userId, entryId)
  }
  
  addEntry = () => {
    //   e.preventDefault();
      this.props.addNewEntry(this.props.userId, {
      entry: this.state.entry,
      user_id: this.props.userId
  });
}
  
  editEntry =  entry  => {
      console.log(entry)
    this.setState({ entry: entry.entry,  isEditing: true, activeEntry: entry.id });
   
}

//like the populated form 
updateEntry = () => {
  const entry = this.props.entries.find(entry => entry.id === this.state.activeEntry) 
  const updatedEntry = {...entry, entry: this.state.entry}   //...entry=full object, entry:entry field, this.state.entry=text
  this.props.editEntry(this.props.userId, updatedEntry )
  this.setState({ entry: '', isEditing: false, activeEntry: null})
}


    render() {
       
        return (
        <div className="cards">
            <NavBar />
            <JournalForm updateEntry={this.updateEntry} handleChanges={this.handleChanges} entry={this.state.entry} editEntry={this.editEntry} isEditing={this.state.isEditing} addEntry={this.addEntry} />
            <Entry entries={this.props.entries} editEntry={this.editEntry}  deleteEntry={this.deleteEntry}/>
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
        isUpdating: state.isUpdating
    }
}
 export default connect(mapStateToProps, 
    {fetchEntry, deleteEntry, editEntry, addNewEntry})
    (HomePage)