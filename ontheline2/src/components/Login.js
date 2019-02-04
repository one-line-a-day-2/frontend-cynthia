import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

class Login extends Component {
    constructor(props) {
      super(props);
  
        this.state = {
          username: '',
          password: ''
        }
    }
  
    handleLogin = e => {
        this.setState({[e.target.name]: e.target.value })
        console.log(e)
    }
  
    addLogin = e => {
        console.log(e)
        e.preventDefault();
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
    }
  
    render() {
      return (

            <div>
             
            <form onSubmit={this.addLogin}>
                <input
                type="text" 
                placeholder="username" 
                name="username"
                value={this.state.username}
                onChange={this.handleLogin}
                 />

                <input
                type="password" 
                name="password"
                placeholder="password" 
                value={this.state.password}
                onChange={this.handleLogin}
                />
                <button>Login</button>
            </form>
          
        </div>
   
      );
    }
  }
  
  
  
  
  const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { login })(Login)
  



