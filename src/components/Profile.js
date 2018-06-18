import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Profile extends Component {

  handleClick = (event) => {
    event.preventDefault()

    this.props.onClick(this.props.history.push)
  }

  render() {
    return (
      <div className="post-container">
        <div className="post">
          <img className="center-user-avatar" src={localStorage.getItem('cute_pic')} alt=""/><br />
          <div className="center-user-info">
            <h1>{localStorage.getItem('username')}</h1>
            <h3>{localStorage.getItem('name')}</h3>
            <h3>Score: {}</h3>
            <NavLink activeClassName="active" to="/editprofile">
              <button>Edit</button>
            </NavLink>
            <button onClick={this.handleClick}>Delete</button>
          </div>
        </div>
      </div>
    )
  }

}
