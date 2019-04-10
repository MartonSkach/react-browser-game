import React from 'react';
import { connect } from 'react-redux';

class Stats extends React.Component {
  render() {
    return (
      <div className='Stats'>
        <div className='Player-Stats'>
          <div className='Player-Stats-HealthBar'>
            <div className='Player-Stats-HealthBar-Health' style={{width: `${this.props.playerHealth}%`}}></div>
          </div>
          <div className='Player-Stats-PostureBar'>
            <div className='Player-Stats-PostureBar-Posture' style={{width: `${this.props.playerPosture}%`}}></div>
          </div>
        </div>
        <div className='Enemy-Stats'>
          <div className='Enemy-Stats-HealthBar'>
            <div className='Enemy-Stats-HealthBar-Health' style={{width: `${this.props.enemyHealth}%`}}></div>
          </div>
          <div className='Enemy-Stats-PostureBar'>
            <div className='Enemy-Stats-PostureBar-Posture' style={{width: `${this.props.enemyPosture}%`}}></div>
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
    enemyHealth: (state.enemy.currentHealth / state.enemy.maxHealth) * 100,
    enemyPosture: (state.enemy.currentPosture / state.enemy.maxPosture) * 100,
  };
}

export default connect(mapStateToProps)(Stats)
