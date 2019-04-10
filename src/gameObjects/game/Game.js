import React from 'react';
import Player from './player/Player';
import Enemy from './enemy/Enemy';
import AbilityBar from './abilities/GoButton';
import GoButton from './abilities/AbilityBar';
import Stats from './stats/Stats';
import '../../style/Game.scss';

class Game extends React.Component {

  render() {
    return (
      <div className='Game'>
          <Stats/>
        <div className='Game-Area'>
          <Player/>
          <Enemy/>
        </div>
          <AbilityBar/>
          <GoButton/>
      </div>
    )
  }
}

export default Game
