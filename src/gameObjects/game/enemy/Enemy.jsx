import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class Enemy extends React.Component {
  state = {
    fighting: false,
    positionX: 0,
    id: null,
    isPostureBroken: false,
    isAlive: true
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.isAlive !== this.props.isAlive) {
      this.setState({isAlive: this.props.isAlive})
    }

    if (prevState.isAlive !== this.state.isAlive) {
      if (!this.state.isAlive) {
        this.props.changeEnemy(this.props.characterStates)
      }
    }

    if (prevProps.isPostureBroken !== this.props.isPostureBroken) {
      this.setState({isPostureBroken: this.props.isPostureBroken})
    }

    if (prevProps.fighting !== this.props.fighting) {
      this.setState({fighting: this.props.fighting})
    }

    if (prevState.isPostureBroken !== this.state.isPostureBroken) {
      if (this.state.isPostureBroken) {
        this.setState({id: 'Enemy-Posture-Broken'})
      } else {
        this.setState({id: null})
      }
    }

    if (prevState.fighting !== this.state.fighting) {
      if (this.state.fighting === true) {
        this.setState({positionX: '-40px'})
        this.setState({id: 'Enemy-Fighting'})
      } else {
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
          style={{transform: `scale(4, 4) translate(${this.state.positionX})`}}
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
