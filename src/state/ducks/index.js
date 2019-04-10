import { combineReducers } from 'redux';
import player from './player';
import enemy from './enemy';

const reducers = combineReducers({
  player,
  enemy
});

export default reducers;
