import React, { Component } from 'react'
import StartBattleForm from '../components/StartBattleForm'

class StartBattleFormContainer extends Component {

  render() {

    return (
      <div>
        <StartBattleForm users={this.props.users}/>
      </div>
    )
  }

}

export default StartBattleFormContainer
