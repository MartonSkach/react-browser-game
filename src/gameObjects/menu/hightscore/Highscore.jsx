import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../state/actions';
import { HomeButton } from '../HomeButton';

class Highscore extends React.Component {
  state = {
    highscores: []
  }

  componentDidUpdate(prevProps) {
    if (prevProps.highscore !== this.props.highscore) {
      this.setState({highscores: this.props.highscore})
    }
  }

  componentDidMount() {
    setTimeout(() => this.props.getHighscore(), 2000)
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
    const highscores = (
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
    )

    const spinner = (
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
    )

    return (
      <div className='Highscore'>
      <div className='Screen-Title'><h1>HIGHSCORES</h1></div>
      {this.state.highscores[0] === undefined ? spinner : highscores}
      <HomeButton/>
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
