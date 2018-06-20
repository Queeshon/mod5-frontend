import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userActions'

class UsersContainer extends Component {

  handleClick = (event) => {
    event.preventDefault()

    const currentUser = this.props.users.filter(user => user.id == localStorage.getItem("user_id"))[0]
    const otherUser = this.props.users.filter(user => user.id == event.target.id)[0]

    const battle = {
      category: "cute",
      users: [currentUser, otherUser]
    }

    this.props.onSubmit(battle, this.props.history.push)
  }


  render() {

    const mostUsers = this.props.users.filter(user => user.id != localStorage.getItem('user_id'))

    const battleableUsers = mostUsers.map((user) => {
      return (
        <div className="post" key={user.id}>
          <img className="center-user-avatar" src={user.cute_pic} alt="" /><br />
          <div className="center-user-info">
            <h1>{user.username}</h1>
            <h3>{user.name}</h3>
            <button onClick={this.handleClick} id={user.id}>Battle</button>
          </div>
        </div>
      )
    })

    return (
      <div className="post-container">
        {battleableUsers}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users.items
})

export default UsersContainer
