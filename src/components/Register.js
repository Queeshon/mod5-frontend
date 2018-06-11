import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'

class Register extends Component {

  state = {
    name: "",
    username: "",
    avatar: "",
    cute_pic: ""
  }

  handleUserName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUserUsername = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUserAvatar = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUserCutePic = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    const user = {
      name: this.state.name,
      username: this.state.username,
      avatar: this.state.avatar,
      cute_pic: this.state.cutePic
    }

    this.props.createUser(user)
  }

  render() {
    console.log(this.props)
    return (
      <div>

        <form>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.handleUserName}/><br/>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUserUsername}/><br/>
          <label>Avatar URL</label>
          <input type="text" value={this.state.avatar} onChange={this.handleAvatar}/><br/>
          <label>Cute Pic URL</label>
          <input type="text" value={this.state.cutePic} onChange={this.handleCutePic}/><br/>

          <button type="submit" onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  newUser: state.users.item
})

export default connect(mapStateToProps, { createUser })(Register)
