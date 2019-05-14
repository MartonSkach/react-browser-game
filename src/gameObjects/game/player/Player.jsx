import React from 'react';
import { connect } from 'react-redux'

class Player extends React.Component {
  state = {
    fighting: false,
    positionX: 0,
    scale: '(-4, 4)',
    id: null,
    isPostureBroken: false
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.isPostureBroken !== this.props.isPostureBroken) {
      this.setState({isPostureBroken: this.props.isPostureBroken})
    }

    if (prevProps.fighting !== this.props.fighting) {
      this.setState({fighting: this.props.fighting})
    }

    if (prevState.fighting !== this.state.fighting) {
      if (this.state.fighting) {
        if (this.props.winner === 'player') {
          this.setState({positionX: '-35px'})
        } else if (this.props.winner === 'enemy') {
          this.setState({positionX: '0px'})
        } else {
          this.setState({positionX: '-20px'})
        }
        this.setState({id: 'Player-Fighting'})
        this.setState({scale: '(-7, 7)'})
      } else {
        this.setState({positionX: 0})
        this.setState({scale: '(-4, 4)'})
        if (this.state.isPostureBroken) {
          this.setState({id: 'Player-Posture-Broken'})
        } else {
          this.setState({id: null})
        }
      }
    }
  }

  render() {
    return (
      <div className='Player-Object'>
        <p>Next action: {this.props.playerNextAction}</p>
        <div
          className='Player-Object-Character'
          style={{transform: `scale${this.state.scale} translate(${this.state.positionX})`}}
          id={this.state.id}
          >
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fighting: state.player.fighting,
    playerNextAction: state.player.nextAction,
    isPostureBroken: state.player.isPostureBroken,
    currentPosture: state.player.currentPosture,
    winner: state.game.winner,
  };
}

export default connect(mapStateToProps)(Player)
