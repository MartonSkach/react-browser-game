import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class Enemy extends React.Component {
  state = {
    fighting: false,
    positionX: 0,
    scale: '(4, 4)',
    id: null,
    isPostureBroken: false,
    isAlive: true
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.isAlive !== this.props.isAlive) {
      this.setState({isAlive: this.props.isAlive})
      if (!this.props.isAlive) {
        console.log('ded')
        setTimeout(() => {
          this.setState({id: 'Enemy-Dead'})
        }, 1000)
        setTimeout(() => {
          this.setState({id: null})
          this.props.changeEnemy(this.props.characterStates)
        }, 3000)
      }
    }

    if (prevProps.fighting !== this.props.fighting) {
      this.setState({fighting: this.props.fighting})
    }

    if (prevState.isPostureBroken !== this.state.isPostureBroken) {
      this.setState({isPostureBroken: this.props.isPostureBroken})
      if (this.state.isPostureBroken) {
        this.setState({id: 'Enemy-Posture-Broken'})
      } else {
        this.setState({id: null})
      }
    }

    if (prevState.fighting !== this.state.fighting) {
      if (this.state.fighting) {
        if (this.props.winner === 'player') {
          this.setState({positionX: '0px'})
        } else if (this.props.winner === 'enemy') {
          this.setState({positionX: '-35px'})
        } else {
          this.setState({positionX: '-20px'})
        }
        this.setState({id: 'Enemy-Fighting'})
        this.setState({scale: '(7, 7)'})
      } else {
        this.setState({scale: '(4, 4)'})
        this.setState({positionX: 0})
        if (this.state.isPostureBroken) {
          this.setState({id: 'Enemy-Posture-Broken'})
        } else {
          this.setState({id: null})
        }
      }
    }

  }
  render() {
    return (
      <div className='Enemy-Object'>
        <p>Next Action: {this.props.enemyNextAction}</p>
        <div
          className='Enemy-Object-Character'
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
    enemyNextAction: state.enemy.nextAction,
    isPostureBroken: state.enemy.isPostureBroken,
    isAlive: state.enemy.isAlive,
    winner: state.game.winner,
    characterStates: {
      playerState: {...state.player},
      enemyState: {...state.enemy}
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeEnemy: (characterStates) =>
      dispatch({ type: actionType.CHANGE_ENEMY, payload: characterStates }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy)
