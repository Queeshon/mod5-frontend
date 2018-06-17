import React, { Component } from 'react'

export default class Profile extends Component {

  render() {
    return (
      <div className="post">
        <img className="center-user-avatar" src={localStorage.getItem('cute_pic')} alt=""/><br />
        <div className="center-user-info">
          <h1>{localStorage.getItem('username')}</h1>
          <h3>{localStorage.getItem('name')}</h3>
          <h3>Score: {}</h3>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }

}
