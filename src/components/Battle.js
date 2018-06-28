import React, { Component } from 'react'
import Competitor from './Competitor'
import { connect } from 'react-redux'
import { newLike } from '../actions/likeActions'

class Battle extends Component {

  state = {
    user1Likes: this.props.likes.filter(like => like.user_id === this.props.users[0].id).length,
    user2Likes: this.props.likes.filter(like => like.user_id === this.props.users[1].id).length
  }

  componentDidMount() {
    if (this.props.likes.length !== 0) {
      this.setState({
        user1Likes: this.props.likes.filter(like => like.user_id === this.props.users[0].id).length,
        user2Likes: this.props.likes.filter(like => like.user_id === this.props.users[1].id).length
      })
    }
  }

  likePicture1 = () => {
    const like = {
      user_id: this.props.users[0].id,
      battle_id: this.props.id
    }

    this.props.newLike(like)
    this.setState({
      user1Likes: this.state.user1Likes + 1
    })
  }

  likePicture2 = () => {
    const like = {
      user_id: this.props.users[1].id,
      battle_id: this.props.id
    }

    this.props.newLike(like)
    this.setState({
      user2Likes: this.state.user2Likes + 1
    })
  }

  render() {

    return (
      <div className='battle-container'>
        <Competitor
          user={this.props.users[0]}
          likes={this.state.user1Likes}
          otherLikes={this.state.user2Likes}
          likePicture={this.likePicture1}
          battleId={this.props.id}
        />
        <div>
          <h1>Cute?</h1>
        </div>
        <Competitor
          user={this.props.users[1]}
          likes={this.state.user2Likes}
          otherLikes={this.state.user1Likes}
          likePicture={this.likePicture2}
          battleId={this.props.id}
        />
      </div>
    )
  }

}

const mapStateToProps = state => ({
  newLike: state.like.item
})

export default connect(mapStateToProps, { newLike })(Battle)
