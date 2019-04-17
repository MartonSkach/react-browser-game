import React from 'react';
import { connect } from 'react-redux'

class Player extends React.Component {
  state = {
    fighting: false,
    positionX: 0,
    id: null,
    isPostureBroken: false
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.isPostureBroken !== this.props.isPostureBroken) {
      this.setState({isPostureBroken: this.props.isPostureBroken})
    }

    if (prevProps.fighting !== this.props.fighting) {
      this.setState({fighting: this.props.fighting})
    }

    if (prevState.fighting !== this.state.fighting) {
      if (this.state.fighting) {
        this.setState({positionX: '-40px'})
        this.setState({id: 'Player-Fighting'})
      } else {
        this.setState({positionX: 0})
        if (this.state.isPostureBroken) {
          this.setState({id: 'Player-Posture-Broken'})
        } else {
          this.setState({id: null})
        }
      }
    }

  }

  render() {
    return (
      <div className='Player-Object'>
        <p>Next action: {this.props.playerNextAction}</p>
        <div
          className='Player-Object-Character'
          style={{transform: `scale(-4, 4) translate(${this.state.positionX})`}}
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
    playerNextAction: state.player.nextAction,
    isPostureBroken: state.player.isPostureBroken,
    currentPosture: state.player.currentPosture,
  };
}

export default connect(mapStateToProps)(Player)
