import React from 'react';
import Player from './player/Player';
import Enemy from './enemy/Enemy';
import AbilityBar from './abilities/GoButton';
import GoButton from './abilities/AbilityBar';
import Stats from './stats/Stats';
import { connect } from 'react-redux'
import '../../style/Game.scss';

class Game extends React.Component {
  state = {
    fighting: false,
    backgroundSize: '800px 600px'
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fighting !== this.props.fighting) {
      if (this.props.fighting) {
        this.setState({backgroundSize: '1600px 1200px'})
      } else {
        this.setState({backgroundSize: '800px 600px'})
      }
    }
  }

  render() {
    return (
      <div className='Game' style={{backgroundSize: `${this.state.backgroundSize}`}}>
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

function mapStateToProps(state) {
  return {
    fighting: state.player.fighting,
  }
}


export default connect(mapStateToProps)(Game)
