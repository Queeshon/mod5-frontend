import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'

import { connect } from 'react-redux';
import './App.css';



class App extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/login' render={(props) => <Login />}/>
          <Route exact path='/register' render={(props) => <Register />}/>
        </Switch>
      </div>
    )
  }

}

export default connect()(App);
