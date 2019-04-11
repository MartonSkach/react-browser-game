
import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../actions';

import { samurai } from '../../gameObjects/game/enemy/enemies/samurai';

function* actionIterator(action) {
  let enemyType = ''
  switch (action.payload.enemyState.enemyName) {
    case 'Samurai':
      enemyType = samurai
      break;
    default:
      return
  }

  if (action.payload.enemyState.actionIterator < action.payload.enemyState.actionArrayLength - 1) {
    return yield put({
      type: actionType.NEXT_ENEMY_ATTACK,
      nextAction: enemyType[action.payload.enemyState.actionArrayNumber][(action.payload.enemyState.actionIterator + 1)]
    })
  } else {
    const newActionArray = (Math.floor(Math.random() * (enemyType.length)));
    return yield put({
      type: actionType.NEXT_ENEMY_MOVESET,
      actionArray: newActionArray,
      actionArrayLength: enemyType[newActionArray].length,
      nextAction: enemyType[newActionArray][0],
    })
  }
}

export function* watchEnemyActions() {
  yield takeEvery(actionType.END_TURN, actionIterator);
}
