import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.username, this.state.password, this.props.history.push)
  }

  render() {
    return (
      <div className="login-container">
        <div className="post">
            <form onSubmit={this.handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                /><br />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                /><br />
              <input className="button big fit" type="submit" value="Log in"/>
              <NavLink activeClassName="active" to="/register">
                <li className="button big fit">Sign Up</li>
              </NavLink>
            </form>
        </div>
      </div>
    )
  }

}

export default Login
