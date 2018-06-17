import React, { Component } from 'react'
import Competitor from './Competitor'

export default class Battle extends Component {

  render() {

    const user1Likes = this.props.likes.filter(like => like.user_id === this.props.users[0].id)
    const user2Likes = this.props.likes.filter(like => like.user_id === this.props.users[1].id)

    return (
      <div className='battle-container'>
        <Competitor user={this.props.users[0]} likes={user1Likes}/>
        <div>
          <h1>{this.props.category}</h1>
        </div>
        <Competitor user={this.props.users[1]} likes={user2Likes}/>
      </div>
    )
  }

}
