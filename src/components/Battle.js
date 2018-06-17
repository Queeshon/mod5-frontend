import React, { Component } from 'react'
import Competitor from './Competitor'

export default class Battle extends Component {

  render() {
    return (
      <div className='battle-container'>
        <Competitor user={this.props.users[0]}/>
        <div>
          <p>hello</p>
        </div>
        <Competitor user={this.props.users[1]}/>
      </div>
    )
  }

}
