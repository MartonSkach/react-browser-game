
import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../actions';

function* battleHandler(action) {
  if (action.payload.enemyState.nextAction === actionType.ATTACK_TOP) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_TOP:
        return yield put({ type: actionType.ATTACK_DEFLECTED })
      case actionType.BLOCK:
        return yield put({ type: actionType.ATTACK_BLOCKED })
      case actionType.DODGE:
        if ((Math.floor(Math.random() * 10) + 1) >= 6) {
          return yield put({ type: actionType.ATTACK_DODGED })
        } else {
          return yield put({ type: actionType.ATTACK_HIT })
        }
      default:
        return yield put({ type: actionType.ATTACK_HIT })
    }
  } else if (action.payload.enemyState.nextAction === actionType.ATTACK_CENTER) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_CENTER:
        return yield put({ type: actionType.ATTACK_DEFLECTED })
      case actionType.BLOCK:
        return yield put({ type: actionType.ATTACK_BLOCKED })
      case actionType.DODGE:
        return yield put({ type: actionType.ATTACK_DODGED })
      default:
        return yield put({ type: actionType.ATTACK_HIT })
    }
  } else if (action.payload.enemyState.nextAction === actionType.ATTACK_DOWN) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_DOWN:
        return yield put({ type: actionType.ATTACK_DEFLECTED })
      case actionType.BLOCK:
        return yield put({ type: actionType.ATTACK_BLOCKED })
      case actionType.DODGE:
        return yield put({ type: actionType.ATTACK_DODGED })
      default:
        return yield put({ type: actionType.ATTACK_HIT })
    }
  } else if (action.payload.enemyState.nextAction === actionType.IMPALE) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_CENTER:
        return yield put({ type: actionType.IMPALE_DEFLECTED })
      case actionType.DODGE:
        return yield put({ type: actionType.IMPALE_COUNTERED })
      default:
        return yield put({ type: actionType.IMPALE_HIT })
    }
  } else if (action.payload.enemyState.nextAction === actionType.SWEEP) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_DOWN:
        return yield put({ type: actionType.SWEEP_DEFLECTED })
      case actionType.JUMP:
        return yield put({ type: actionType.SWEEP_COUNTERED })
      default:
        return yield put({ type: actionType.SWEEP_HIT })
    }
  }
}


export function* watchReadyToBattle () {
  yield takeEvery('READY_TO_FIGHT', battleHandler );
}
