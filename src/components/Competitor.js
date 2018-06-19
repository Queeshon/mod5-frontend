import React, { Component } from 'react'

class Competitor extends Component {

  handleClick = (event) => {
    event.preventDefault()

    this.props.likePicture()
  }

  handleWin = () => {
    if (this.props.likes >= 20) {
      return "WINNER"
    } else if (this.props.otherLikes >= 20) {
      return "LOSER"
    } else {
      return "LIKES: " + this.props.likes
    }
  }

  handleWinClass = () => {
    if (this.props.likes >= 20) {
      return 'competitor-container'
    } else if (this.props.otherLikes >= 20) {
      return "competitor-container-loser"
    } else {
      return ''
    }
  }

  handleToggleButton = () => {
    if (this.props.likes >= 20) {
      return ''
    } else if (this.props.otherLikes >= 20) {
      return ""
    } else {
      return <button onClick={this.handleClick}>Like</button>
    }
  }

  render() {
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
