import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/userActions'
import { fetchBattles } from '../actions/battleActions'
import Battle from '../components/Battle'

class Battlefeed extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUsers()
      this.props.fetchBattles()
    }
  }



  //in this render function, the 'this.state' is now 'this.props' from the const mapStateToProps below
  render() {

    const allBattles = this.props.battles.map((battle) => {
      return (
        <div className="post" key={battle.battle.id}>
          <Battle users={battle.users} category={battle.battle.category} id={battle.battle.id} likes={battle.likes}/>
        </div>
      )
    })

    console.log(this.props.battles)

    return (
      <div>
        {allBattles}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  users: state.users.items,
  battles: state.battles.items
})

export default connect(mapStateToProps, { fetchUsers, fetchBattles })(Battlefeed)
