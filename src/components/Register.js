import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'


class Register extends Component {

  state = {
    name: "",
    username: "",
    password: "",
    avatar: "",
    cute_pic: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      avatar: this.state.avatar,
      cute_pic: this.state.cute_pic
    }

    this.props.onSubmit(user, this.props.history.push)
  }

  render() {
    return (
      <div className="login-container">
        <div className="post">
          <form onSubmit={this.handleSubmit}>

            <label>Name</label>
            <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/><br/>

            <label>Username</label>
            <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleChange}/><br/>

            <label>Password</label>
            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}/><br/>

            <label>Cute Pic URL</label>
            <input type="text" name="cute_pic" value={this.state.cute_pic} placeholder="URL" onChange={this.handleChange}/><br/>

            <input type="submit" className="button big fit" value="Create User"/>

            <NavLink activeClassName="active" to="/login">
              <li className="button big fit">Log In</li>
            </NavLink>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  newUser: state.users.item
})

export default connect(mapStateToProps, { createUser })(Register)
