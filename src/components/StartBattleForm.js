import React, { Component } from 'react'

class StartBattleForm extends Component {

  render() {

    return (
      <div className="post">
        <form>
          <h1>Category: Cute</h1>
          <h1>Opponent: </h1>
          <h1>Upload Cute Pic URL:</h1><input type="text" />
        </form>
      </div>
    )
  }

}

export default StartBattleForm
