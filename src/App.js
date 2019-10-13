import React, { Component } from 'react';
import Menu from './gameObjects/menu/Menu';
import Game from './gameObjects/game/Game';
import Highscore from './gameObjects/menu/hightscore/Highscore';
import Instructions from './gameObjects/menu/instructions/Instructions';
import Settings from './gameObjects/menu/settings/Settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.scss';
import Arcana from './assets/sounds/The_Fall_of_Arcana.mp3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <audio ref='audio_tag' src={Arcana} autoPlay /> */}
          <Route path='/' exact component={ Menu } />
          <Route path='/highscores' component={ Highscore } />
          <Route path='/settings' component={ Settings } />
          <Route path='/instructions' component={ Instructions } />
          <Route path='/game' component={ Game } />
        </Router>
      </div>);
  }
}

export default App;
