import React from 'react';
import { connect } from 'react-redux';
import Timer from './TImer';

class Stats extends React.Component {
  state = {
    playerIsPostureBroken: false,
    playerPostureId: null,
    enemyIsPostureBroken: false,
    enemyPostureId: null,
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.playerIsPostureBroken !== this.props.playerIsPostureBroken) {
      this.setState({playerIsPostureBroken: this.props.playerIsPostureBroken})
    }
    if (prevState.playerIsPostureBroken !== this.state.playerIsPostureBroken) {
      if (this.state.playerIsPostureBroken) {
        this.setState({playerPostureId: 'Player-Bar-Posture-Broken'})
      } else {
        this.setState({playerPostureId: null})
      }
    }

    if (prevProps.enemyIsPostureBroken !== this.props.enemyIsPostureBroken) {
      this.setState({enemyIsPostureBroken: this.props.enemyIsPostureBroken})
    }
    if (prevState.enemyIsPostureBroken !== this.state.enemyIsPostureBroken) {
      if (this.state.enemyIsPostureBroken) {
        this.setState({enemyPostureId: 'Enemy-Bar-Posture-Broken'})
      } else {
        this.setState({enemyPostureId: null})
      }
    }
  }

  render() {
    return (
      <div className='Stats'>
        <div className='Player-Stats'>
          <div className='Player-Stats-HealthBar'>
            <div className='Player-Stats-HealthBar-Health' style={{width: `${this.props.playerHealth}%`}}></div>
          </div>
          <div className='Player-Stats-PostureBar'>
            <div className='Player-Stats-PostureBar-Posture' id={this.state.playerPostureId} style={{width: `${this.props.playerPosture}%`}}></div>
          </div>
          <div className='Player-Stats-Username'>
            {this.props.playerUsername}
          </div>
        </div>
        <Timer/>
        <div className='Enemy-Stats'>
          <div className='Enemy-Stats-HealthBar'>
            <div className='Enemy-Stats-HealthBar-Health' style={{width: `${this.props.enemyHealth}%`}}></div>
          </div>
          <div className='Enemy-Stats-PostureBar'>
            <div className='Enemy-Stats-PostureBar-Posture' id={this.state.enemyPostureId} style={{width: `${this.props.enemyPosture}%`}}></div>
          </div>
          <div className='Enemy-Stats-Name'>
            {this.props.enemyName}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playerHealth: (state.player.currentHealth / state.player.maxHealth) * 100,
    playerPosture: (state.player.currentPosture / state.player.maxPosture) * 100,
    playerIsPostureBroken: state.player.isPostureBroken,
    enemyHealth: (state.enemy.currentHealth / state.enemy.maxHealth) * 100,
    enemyPosture: (state.enemy.currentPosture / state.enemy.maxPosture) * 100,
    enemyIsPostureBroken: state.enemy.isPostureBroken,
    playerUsername: state.user.userName,
    enemyName: state.enemy.enemyName,
  };
}

export default connect(mapStateToProps)(Stats)
