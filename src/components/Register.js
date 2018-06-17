import React, { Component } from 'react'
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
      <div className="post">
        <form onSubmit={this.handleSubmit}>

          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>

          <label>Password</label>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/><br/>

          <label>Avatar URL</label>
          <input type="text" name="avatar" value={this.state.avatar} onChange={this.handleChange}/><br/>

          <label>Cute Pic URL</label>
          <input type="text" name="cute_pic" value={this.state.cute_pic} onChange={this.handleChange}/><br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  newUser: state.users.item
})

export default connect(mapStateToProps, { createUser })(Register)
