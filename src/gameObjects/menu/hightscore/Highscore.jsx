import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';

class Highscore extends React.Component {
  state = {
    highscores: [{
      "player": "Player",
      "points": 0
    }]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.highscore !== this.props.highscore) {
      this.setState({highscores: this.props.highscore})
    }
  }

  componentDidMount() {
    this.props.getHighscore();
    console.log(this.props.highscore)
  }

  scoreTable = () => this.state.highscores.map((element, i) => {
    return (
      <tr key={i}>
        <td>{element.player}</td>
        <td>{element.points}</td>
      </tr>
    )
  })

  render() {
    return (
      <div className='Highscore'>
      <h1>HIGHSCORES</h1>
      <table className='Highscores-Table'>
        <thead>
          <tr>
            <td>PLAYER</td>
            <td>POINTS</td>
          </tr>
        </thead>
        <tbody>
          {this.scoreTable()}
        </tbody>
      </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    highscore: state.user.highscore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHighscore: () =>
      dispatch({ type: actionType.REQUEST_HIGHSCORES }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Highscore)
