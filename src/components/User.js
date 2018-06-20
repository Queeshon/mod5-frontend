import React, { Component } from 'react'

class Competitor extends Component {

  render() {

    const user = this.props.user

    return (
      <div>
        <img className="center-user-avatar" src={user.cute_pic} alt="" /><br />
        <div className="center-user-info">
          <h1>{user.username}</h1>
          <h3>{user.name}</h3>
        </div>
      </div>
    )
  }

}

export default Competitor
