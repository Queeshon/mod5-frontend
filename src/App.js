import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

//components
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

//containers
import Battlefeed from './containers/Battlefeed'
import StartBattleFormContainer from './containers/StartBattleFormContainer'

//redux actions
import { fetchUsers, createUser } from './actions/userActions'
import { createSession } from './actions/loginActions'

import './App.css';



class App extends Component {

  state = {
    clicked: false
  }

  componentDidMount(){
    if (localStorage.getItem('token')) {
      this.props.fetchUsers()
    }
  }

  login = (username, password, callback) => {
    this.props.createSession(username, password)
    callback('/battlefeed')
  }

  register = (userData, callback) => {
    this.props.createUser(userData)
    callback("/battlefeed")
  }

  handleMenuClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('username')
  }

  handleToggleButton = () => {
    if (localStorage.getItem("token")) {
      return (
        <ul className="actions vertical" onClick={this.handleLogout}>
          <NavLink activeClassName="active" to="/login">
            <li className="button big fit">Log Out</li>
          </NavLink>
        </ul>
      )
    } else {
      return (
        <ul className="actions vertical">
          <NavLink activeClassName="active" to="/login">
            <li className="button big fit">Log In</li>
          </NavLink>
        </ul>
      )
    }
  }

  async getToken(){
    let token = await localStorage.getItem('token')
    return token
  }

  render() {

    return (
      <Router>
        <div>
          <div id="wrapper">
            <header id="header">
              <h1><a href="/battlefeed">Cute Pic Battles</a></h1>
              <nav className="main">
                <ul>
                  <li>
                    <a className="fa-play" href="/battleform">BattleForm</a>
                  </li>
                  <li className="menu" onClick={this.handleMenuClick}>
                    <a className="fa-bars" href="#menu">Menu</a>
                  </li>
                </ul>
              </nav>
            </header>

            <section id={this.state.clicked ? "menu-clicked" : "menu"}>
              <section>
                <ul className="links">
                  <li>
                    <a href="#">
                      <h3>Friends</h3>
                      <p>Fellow Picture Battlers</p>
                    </a>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/profile">
                      <h3>Profile</h3>
                      <p>Account Information</p>
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">
                      <h3>Your Battles</h3>
                      <p>Battles Involving You</p>
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                {this.handleToggleButton()}
              </section>
            </section>
            <Switch>
              <Route exact path='/' render={(props) => <Welcome />} />
              <Route exact path='/login' render={(props) => <Login onSubmit={this.login} {...props}/>} />
              <Route exact path='/register' render={(props) => <Register onSubmit={this.register} {...props}/>} />
              {this.getToken() ? <Route exact path='/battlefeed' render={(props) => <Battlefeed {...props} />} /> : <Redirect to='/' />}
              <Route exact path='/profile' render={(props) => <Profile {...props}/>} />
              <Route exact path='/battleform' render={(props) => <StartBattleFormContainer users={this.props.users} {...props}/>} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item
})

export default connect(mapStateToProps, {fetchUsers, createUser, createSession})(App)
