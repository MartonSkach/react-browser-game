import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../state/actions';

class GameOverScreen extends React.Component {
  render() {
    return (
      <div className='GameOver-Wrapper'>
        <h1>Game Over</h1>
        <h2>Restart level?</h2>
        <div className='GameOver-AnswerButtons'>
          <div onClick={ this.props.restartLevel }>YES</div>
          <Link to='/'>
            <div>NO</div>
          </Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    restartLevel: () =>
      dispatch({ type: actionType.RESTART_LEVEL }),
  }
}

export default connect(null, mapDispatchToProps)(GameOverScreen)
