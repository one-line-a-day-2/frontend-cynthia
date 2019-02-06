import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <p>This is the home page</p>
            </div>
        )
    }
}

export default HomePage;