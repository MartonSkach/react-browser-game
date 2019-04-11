import React from 'react';
import { connect } from 'react-redux'

class Player extends React.Component {
  state = {
    fighting: false,
    positionX: 0
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.fighting !== this.props.fighting) {
      this.setState({fighting: this.props.fighting})
    }

    if (prevState.fighting !== this.state.fighting) {
      if (this.state.fighting === true) {
        this.setState({positionX: '-40px'})
      } else {
        this.setState({positionX: 0})
      }
    }

  }

  render() {
    return (
      <div className='Player-Object'>
        <p>{this.props.playerNextAction}</p>
        <div className='Player-Object-Character' style={{transform: `scale(-4, 4) translate(${this.state.positionX})`}}></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fighting: state.player.fighting,
    playerNextAction: state.player.nextAction,

  };
}

export default connect(mapStateToProps)(Player)
