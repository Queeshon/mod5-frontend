import React, { Component } from 'react'

class Competitor extends Component {

  state = {
    likes: null
  }

  componentDidMount() {
    if (this.props.likes.length !== 0) {
      if (this.props.likes.length >= 20) {
        this.setState({
          likes: "WINNER"
        })
      } else {
        this.setState({
          likes: this.props.likes
        })
      }
    }
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

  handleWin = () => {
    if (this.state.likes >= 20) {
      return "WINNER"
    } else {
      return "LIKES: " + this.state.likes
    }
  }

  handleWinClass = () => {
    if (this.state.likes >= 20) {
      return 'competitor-container'
    } else {
      return ''
    }
  }

  handleToggleButton = () => {
    if (this.state.likes >= 20) {
      return ''
    } else {
      return <button onClick={this.handleClick}>Like</button>
    }
  }

  render() {
    console.log(this.props.otherUserLikes)
    return (
      <div className={this.handleWinClass()}>
        <img className="image fit" src={this.props.user.cute_pic} alt="" />
        <div className="center-user-info">
          <h1>{this.props.user.username}</h1>
          <h3>{this.handleWin()}</h3>
          {this.handleToggleButton()}
        </div>
      </div>
    )
  }

}

export default Competitor
