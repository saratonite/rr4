import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = { auth: true };
  }

  gobackToHome() {

    this.setState({auth:false});

  }

  render() {

    if(!this.state.auth) {
      return(
        <Redirect to="/"></Redirect>
      );
    }

    return(
      <div className="page">
        <h1>About</h1>
        <button onClick={this.gobackToHome.bind(this)}>Back to Home</button>
      </div>
    )
  }
}
