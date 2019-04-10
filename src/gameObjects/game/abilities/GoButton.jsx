import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class GoButton extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.onReadyClick(this.props.characterStates)}>
        READY
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characterStates: {
      playerState: {...state.player},
      enemyState: {...state.enemy}
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReadyClick: (characterStates) =>
      dispatch({ type: actionType.READY_TO_FIGHT, payload: characterStates }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GoButton)
