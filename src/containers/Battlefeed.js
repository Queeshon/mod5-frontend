import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBattles } from '../actions/battleActions'
import Battle from '../components/Battle'

class Battlefeed extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
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

    return (
      <div className="post-container">
        {allBattles}
      </div>
    )
  }

}

const mapStateToProps = state => ({
  battles: state.battles.items
})

export default connect(mapStateToProps, { fetchBattles })(Battlefeed)
