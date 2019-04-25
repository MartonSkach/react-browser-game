import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class Timer extends React.Component {
  state = {
    remainingAttacks: 1,
  }

  componentDidMount() {
    this.battleTimer = setInterval(() => {
      if (this.props.timeRemaining > 0) {
        if (this.state.remainingAttacks !== 1) {
          this.setState({ remainingAttacks: 1 })
        }
        this.props.updateTimer(this.props.timeRemaining)
      } else {
        this.onTimeUp()
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.battleTimer);
  }

  onTimeUp() {
    if (this.state.remainingAttacks === 1) {
      this.setState({ remainingAttacks: 0 })
      this.props.onBattleStart(this.props.characterStates)
      setTimeout(
        () => this.props.onNewTurnStart(this.props.characterStates),
        2000)
    }
  }

  render() {
    return (
      <div className='Timer-Base'>
        <div className='Timer-Text'>{this.props.timeRemaining}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timeRemaining: state.game.timeRemaining,
    characterStates: {
      playerState: { ...state.player },
      enemyState: { ...state.enemy },
      gameState: { ...state.game },
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTimer: (timeRemaining) =>
      dispatch({ type: actionType.UPDATE_TIMER, payload: timeRemaining }),
    onBattleStart: (characterStates) =>
      dispatch({ type: actionType.START_BATTLE, payload: characterStates }),
    onNewTurnStart: (characterStates) =>
      dispatch({ type: actionType.START_NEW_TURN, payload: characterStates }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
