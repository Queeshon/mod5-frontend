import React, { Component } from 'react'

class Competitor extends Component {

  state = {
    likes: this.props.likes.length,
    clicked: false
  }

  handleClick = (event) => {
    event.preventDefault()

    const like = {
      user_id: this.props.user.id,
      battle_id: this.props.battleId
    }

    this.props.likePicture(like)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  handleToggleButton = () => {

  }

  render() {
    return (
      <div className='competitor-container'>
        <img className="image fit" src={this.props.user.cute_pic} alt="" />
        <div className="center-user-info">
          <h1>{this.props.user.username}</h1>
          <h3>Likes: {this.state.likes}</h3>
          <button onClick={this.handleClick}>Like</button>
        </div>
      </div>
    )
  }

}

export default Competitor
