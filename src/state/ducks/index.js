import { combineReducers } from 'redux';
import player from './player';
import enemy from './enemy';
import user from './user';
import game from './game';

const reducers = combineReducers({
  player,
  enemy,
  user,
  game,
});

export default reducers;
