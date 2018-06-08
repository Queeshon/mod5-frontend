import React, { Component } from 'react'
import Battle from '../components/Battle'

export default class Battlefeed extends Component {

  componentDidMount() {
    fetch("http://localhost:5000/api/v1/battles")
    .then(response => response.json())
    .then(battles => {

    })
  }

  render() {
    return (
      "hello"
      <div>
        <ul>
          { battle list }
        </ul>
      </div>
    )
  }

}
