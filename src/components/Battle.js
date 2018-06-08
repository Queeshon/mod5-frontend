import React, { Component } from 'react'
import Competitor from './Competitor'

export default class Battle extends Component {

  render() {
    return (
      <div className='battle-container'>
        <Competitor />
        <div>
        </div>
        <Competitor />
      </div>
    )
  }

}
