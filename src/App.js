import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

//components
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import StartBattleForm from './components/StartBattleForm'

//containers
import Battlefeed from './containers/Battlefeed'

//redux actions
import { fetchUsers, createUser, editUser, deleteUser } from './actions/userActions'
import { newBattle } from './actions/battleActions'
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

  //user functions
  login = (username, password, callback) => {
    this.props.createSession(username, password)
    callback('/battlefeed')
  }

  register = (userData, callback) => {
    this.props.createUser(userData)
    callback("/battlefeed")
  }

  edit = (userData, callback) => {
    this.props.editUser(userData)
    callback("/profile")
  }

  del = (callback) => {
    this.props.deleteUser()
    callback('/')
  }

  //menu functions
  handleMenuClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('username')
    localStorage.removeItem('avatar')
    localStorage.removeItem('cute_pic')
    localStorage.removeItem('name')
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

  //battle functions
  startBattle = (battleData, callback) => {
    this.props.newBattle(battleData)
    callback("/battlefeed")
  }

  //auth functions
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
              <NavLink activeClassName="active" to="/battlefeed">
                <h1>Cute Pic Battles</h1>
              </NavLink>
              <nav className="main">
                <ul>
                  <li>
                    <NavLink activeClassName="active" className="fa-play" to="/battleform">
                      <p>Start Battle</p>
                    </NavLink>
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
                    <NavLink activeClassName="active" to="/profile" onClick={this.handleMenuClick}>
                      <h3>Friends</h3>
                      <p>Fellow Picture Battlers</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/profile" onClick={this.handleMenuClick}>
                      <h3>Profile</h3>
                      <p>Account Information</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/profile" onClick={this.handleMenuClick}>
                      <h3>Your Battles</h3>
                      <p>Battles Involving You</p>
                    </NavLink>
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
              {localStorage.getItem('token') ? <Route exact path='/profile' render={(props) => <Profile onClick={this.del} {...props}/>} /> : <Redirect to="/"/>}
              {localStorage.getItem('token') ? <Route exact path='/battleform' render={(props) => <StartBattleForm users={this.props.users} onSubmit={this.startBattle} {...props}/>} /> : <Redirect to="/"/>}
              {localStorage.getItem('token') ? <Route exact path='/editprofile' render={(props) => <EditProfile onSubmit={this.edit} {...props}/>} /> : <Redirect to="/"/>}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users.items,
  newUser: state.users.item,
  editedUser: state.users.editItem
})

export default connect(mapStateToProps, {fetchUsers, createUser, editUser, deleteUser, newBattle, createSession})(App)
