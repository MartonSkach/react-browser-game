import React from 'react';
import '../../style/Menu.scss';

class Menu extends React.Component {

  navigateToGame = () => {
    this.props.history.push('/game')
  }
  navigateToInstructions = () => {
    this.props.history.push('/instructions')
  }
  navigateToHighscores = () => {
    this.props.history.push('/highscores')
  }
  navigateToSettings= () => {
    this.props.history.push('/settings')
  }

  render() {
    return (
      <div className='Main-Menu'>
        <div className='Main-Menu-Wrapper'>
          <h1 onClick={ this.navigateToGame } >START GAME</h1>
          <h1 onClick={ this.navigateToInstructions } >INSTRUCTIONS</h1>
          <h1 onClick={ this.navigateToHighscores } >HIGHSCORE</h1>
          <h1 onClick={ this.navigateToSettings } >SETTINGS</h1>
        </div>
      </div>
    )
  }
}

export default Menu
