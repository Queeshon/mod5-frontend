import React, { Component } from 'react'

class StartBattleForm extends Component {

  state = {
    randomBattleUser: {}
  }

  randomUser = () => {
    if (this.props.users.length !== 0) {
      let newUsers = this.props.users.filter(user => user.id != localStorage.getItem("user_id"))
      const randomBattleUser = newUsers[Math.floor(Math.random()*newUsers.length)]
      localStorage.setItem("battleObject", JSON.stringify(randomBattleUser))

      return randomBattleUser
    } else {
      return (
        <div className="post">
          <div className="center-user-info">
            <h1>No users to battle</h1>
          </div>
        </div>
      )
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const rbu = JSON.parse(localStorage.getItem('battleObject'))
    const currentUser = this.props.users.filter(user => user.id == localStorage.getItem("user_id"))[0]

    const battle = {
      category: "cute",
      users: [currentUser, rbu]
    }

    this.props.onSubmit(battle, this.props.history.push)
  }

  render() {
    return (
      <div className="post">
        <form onSubmit={this.handleSubmit}>
          <h1>Category: Cute</h1>
          <h1>Opponent: {this.randomUser().username}</h1>
          <input type="submit" value="Start Battle"/>
        </form>
      </div>
    )
  }

}

export default StartBattleForm
