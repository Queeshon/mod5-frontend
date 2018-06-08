import React, { Component } from 'react';
import Battlefeed from './containers/Battlefeed'

import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  render() {
    console.log(this.props.store);
    return (
      <div>
        <Battlefeed />
      </div>
    )
  }

}

export default connect()(App);
