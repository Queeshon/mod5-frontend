import React, { Component } from 'react'

export default class Login extends Component {
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
    console.log(this.props)
    return (
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
        <input type="submit" value="Log in"/>
      </form>
    )
  }

}
