import React from 'react';
import Player from './player/Player';
import Enemy from './enemy/Enemy';
import AbilityBar from './abilities/AbilityBar';
import { HomeButton } from '../menu/HomeButton';
import GameOverScreen from '../menu/GameOverScreen';
import Stats from './stats/Stats';
import { connect } from 'react-redux'
import '../../style/Game.scss';

class Game extends React.Component {
  render() {
    return (
      <div className='Game'>
        <div className='Game-Ui'></div>
          <Stats />
        <div className='Game-Area'>
          <Player />
          <Enemy />
        </div>
          <AbilityBar />
          <HomeButton />
          { !this.props.playerIsAlive && <GameOverScreen /> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fighting: state.player.fighting,
    playerIsAlive: state.player.isAlive,
  }
}


export default connect(mapStateToProps)(Game)
