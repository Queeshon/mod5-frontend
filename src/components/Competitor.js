import React, { Component } from 'react'

export default class Competitor extends Component {

  render() {
    return (
      <div className='competitor-container'>
        <img className="image fit" src={this.props.user.cute_pic} alt="" />
        <div className="center-user-info">
          <h1>{this.props.user.username}</h1>
          <h3>Likes: {this.props.likes.length}</h3>
          <button>Like</button>
        </div>
      </div>
    )
  }

}
