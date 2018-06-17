import React, { Component } from 'react'

export default class Competitor extends Component {

  render() {
    console.log(this.props.user)
    return (
      <div className='competitor-container'>
        <img className="image fit" src={this.props.user.cute_pic} alt="" />
        <h3 className="">{this.props.user.username}</h3>
      </div>
    )
  }

}
