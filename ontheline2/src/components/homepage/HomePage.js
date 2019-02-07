import React, { Component } from 'react'
import NavBar from '../navbar/NavBar'
import Entry from '../homepage/Entry'
import { connect } from 'react-redux';
import { fetchEntry } from '../../actions'


class HomePage extends Component {


componentDidMount() {
    this.props.fetchEntry();
}

    render() {
        return (
        <div className="cards">
        <NavBar />
            <Entry entries={this.props.entries}/>
        </div>
    );
  };
}


const mapStateToProps = state => {
    return {
        fetchEntries: state.fetchEntries,
        entries: state.entries
    }
}
 export default connect(mapStateToProps, 
    {fetchEntry})
    (HomePage)