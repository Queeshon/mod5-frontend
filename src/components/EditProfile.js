import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from '../actions/userActions'


//create an edit action in useractions. make sure to go to reducer. check mapStateToProps

class EditProfile extends Component {

  state = {
    name: localStorage.getItem("name"),
    username: localStorage.getItem("username"),
    password: "",
    avatar: localStorage.getItem("avatar"),
    cute_pic: localStorage.getItem("cute_pic")
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
      avatar: this.state.avatar,
      cute_pic: this.state.cute_pic
    }

    this.props.onSubmit(user, this.props.history.push)
  }

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <form onSubmit={this.handleSubmit}>

            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br/>

            <label>Cute Pic URL</label>
            <input type="text" name="cute_pic" value={this.state.cute_pic} onChange={this.handleChange}/><br/>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  editedUser: state.users.editItem
})

export default connect(mapStateToProps, { editUser })(EditProfile)
