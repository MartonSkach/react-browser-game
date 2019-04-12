
import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../actions';

import { samurai } from '../../gameObjects/game/enemy/enemies/samurai';
import { ronin, roninStats } from '../../gameObjects/game/enemy/enemies/ronin';

function* actionIterator(action) {
  let enemyType = ''
  switch (action.payload.enemyState.enemyName) {
    case 'Samurai':
      enemyType = samurai
      break;
    case 'Ronin':
      enemyType = ronin
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

function* enemyIterator(action) {
  let enemyMoveset = ronin;
  let enemyObject = roninStats;
  yield put({
    type: actionType.NEXT_ENEMY,
    maxHealth: enemyObject.maxHealth,
    currentHealth: enemyObject.maxHealth,
    maxPosture: enemyObject.maxPosture,
    currentPosture: 0,
    enemyName: enemyObject.enemyName,
    requiredFinishers: enemyObject.requiredFinishers,
    basePostureRegeneration: enemyObject.basePostureRegeneration,
    attackDamage: enemyObject.attackDamage,
    impaleDamage: enemyObject.impaleDamage,
    sweepDamage: enemyObject.sweepDamage,
    nextAction: enemyMoveset[0][0],
    actionIterator: 0,
    actionArrayLength: enemyMoveset[0].length,
    actionArrayNumber: 0,

  })
}

export function* watchEnemyActions() {
  yield takeEvery(actionType.END_TURN, actionIterator);
}

export function* watchEnemyChange() {
  yield takeEvery(actionType.CHANGE_ENEMY, enemyIterator);
}
