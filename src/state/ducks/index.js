import { combineReducers } from 'redux';
import player from './player';
import enemy from './enemy';
import user from './user';

const reducers = combineReducers({
  player,
  enemy,
  user,
});

export default reducers;
