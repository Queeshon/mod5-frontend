import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userActions'
import { fetchBattles } from '../actions/battleActions'
import Battle from '../components/Battle'

class Battlefeed extends Component {

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchBattles()
  }

  //in this render function, the 'this.state' is now 'this.props' from the const mapStateToProps below
  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          <p>Battle List</p>
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users.items,
  battles: state.battles.items
})

export default connect(mapStateToProps, { fetchUsers, fetchBattles })(Battlefeed)
