import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Battlefeed from './containers/Battlefeed'

import './App.css';



class App extends Component {

  login = (username, password, callback) => {
    fetch('http://localhost:3000/api/v1/sessions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token)
      localStorage.setItem('user_id', json.user_id)
      localStorage.setItem('username', json.username)

      callback('/battlefeed')
    })
  }

  register = () => {

  }

  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <Welcome />}/>
          <Route exact path='/login' render={(props) => <Login onSubmit={this.login} {...props}/>}/>
          <Route exact path='/register' render={(props) => <Register />}/>
          {localStorage.getItem('token') ? <Route exact path='/battlefeed' render={(props) => <Battlefeed />}/> : <Redirect to="/"/>}
        </Switch>
      </div>
    )
  }

}

export default App;
