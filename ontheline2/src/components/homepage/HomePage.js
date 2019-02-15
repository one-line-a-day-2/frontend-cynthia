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
            isUpdating: false,
            entry: ''
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
    //   e.preventDefault();
      const updateEntry = this.props.entries.find(e => e.id === entry.id )
      this.props.editEntry(this.props.userId, entry)
    this.setState({ entry: updateEntry, isUpdating: false });
   
}
  


    render() {
       
        return (
        <div className="cards">
            <NavBar />
            <JournalForm  handleChanges={this.handleChanges} editEntry={this.editEntry} isUpdating={this.isUpdating} addEntry={this.addEntry} />
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