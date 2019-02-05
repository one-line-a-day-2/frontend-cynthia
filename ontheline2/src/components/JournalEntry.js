import React, { Component } from 'react'


class JournalEntry extends Component {
    render() {
        return (
            <div>
                 <form  autoComplete='off' >
               <input
                type="text" 
                placeholder="Thoughts... " 
                name="username"
                // value={this.state.username}
                // onChange={this.handleLogin}
                 />
                <button>Save Entry</button>
            </form>

                
            </div>
        )
    }
}

export default JournalEntry;