import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Login extends Component {

  signIn() {
    /*
    Login related work
    */
   console.log('this -->')
   console.log(this.props)
   this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.signIn.bind(this)}>Sign in</button>
      </div>
    );
  }
}

export default withRouter(Login)
//HOC
