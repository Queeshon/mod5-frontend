import React, { Component } from 'react'
import Competitor from './Competitor'
import { connect } from 'react-redux'
import { newLike } from '../actions/likeActions'

class Battle extends Component {

  likePicture = (likeData) => {
    this.props.newLike(likeData)
  }

  render() {

    const user1Likes = this.props.likes.filter(like => like.user_id === this.props.users[0].id)
    const user2Likes = this.props.likes.filter(like => like.user_id === this.props.users[1].id)

    return (
      <div className='battle-container'>
        <Competitor user={this.props.users[0]} likes={user1Likes} likePicture={this.likePicture} battleId={this.props.id}/>
        <div>
          <h1>{this.props.category}</h1>
        </div>
        <Competitor user={this.props.users[1]} likes={user2Likes} likePicture={this.likePicture} battleId={this.props.id}/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  newLike: state.like.item
})

export default connect(mapStateToProps, { newLike })(Battle)
