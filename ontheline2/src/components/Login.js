import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
      super(props);
  
        this.state = {
          username: '',
          password: ''
        }
    }
  
    // handleLogin = e => {
    //     this.setState({[e.target.name]: e.target.value })
    // }
  
    // addLogin = e => {
    //     // e.preventDefault(); //don't know if this is needed
    //     const userInfo = this.state.username;
    //     localStorage.setItem('userInfo', userInfo);
    //     window.location.reload();
    // }
  
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
  
  
  
  
  export default Login;
  



