import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Welcome extends Component {

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <div className="center-user-info">
            <h1>Welcome to Cute Pic Battles</h1>
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
