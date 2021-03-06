import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Welcome extends Component {

  render() {
    return (
      <div className="login-container">
        <div className="post">
          <div className="center-user-info">
            <h1>Welcome to Cute Or Boot</h1>
            <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"/></a><br />
            <NavLink activeClassName="active" to="/register">
              <button>Register</button>
            </NavLink>
            <NavLink activeClassName="active" to="/login">
              <button>Log In</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }

}
