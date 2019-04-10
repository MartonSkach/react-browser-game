import React, { Component } from 'react';
import Menu from './gameObjects/menu/Menu';
import Game from './gameObjects/game/Game';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' exact component={ Menu } />
          <Route path='/highscore' exact component={ Menu } />
          <Route path='/game' component={ Game } />
        </Router>
      </div>
    );
  }
}

export default App;
