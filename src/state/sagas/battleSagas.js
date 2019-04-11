
import { takeEvery, put, delay } from 'redux-saga/effects';
import * as actionType from '../actions';

function* battleHandler(action) {
  if (action.payload.enemyState.nextAction === actionType.ATTACK_TOP) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_TOP:
        yield put({ type: actionType.ATTACK_DEFLECTED, payload: action.payload })
        break;
      case actionType.BLOCK:
        yield put({ type: actionType.ATTACK_BLOCKED, payload: action.payload })
        break;
      case actionType.DODGE:
        if ((Math.floor(Math.random() * 10) + 1) >= 6) {
          yield put({ type: actionType.ATTACK_DODGED, payload: action.payload })
          break;
        } else {
          yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
          break;
        }
      default:
        yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
        break;
    }
    return yield put({ type: actionType.END_TURN, payload: action.payload })

  } else if (action.payload.enemyState.nextAction === actionType.ATTACK_CENTER) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_CENTER:
        yield put({ type: actionType.ATTACK_DEFLECTED, payload: action.payload })
        break;
      case actionType.BLOCK:
        yield put({ type: actionType.ATTACK_BLOCKED, payload: action.payload })
        break;
      case actionType.DODGE:
        if ((Math.floor(Math.random() * 10) + 1) >= 6) {
          yield put({ type: actionType.ATTACK_DODGED, payload: action.payload })
          break;
        } else {
          yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
          break;
        }
      default:
        yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
        break;
    }
    return yield put({ type: actionType.END_TURN, payload: action.payload })

  } else if (action.payload.enemyState.nextAction === actionType.ATTACK_DOWN) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_DOWN:
        yield put({ type: actionType.ATTACK_DEFLECTED, payload: action.payload})
        break;
      case actionType.BLOCK:
        yield put({ type: actionType.ATTACK_BLOCKED, payload: action.payload })
        break;
      case actionType.DODGE:
        if ((Math.floor(Math.random() * 10) + 1) >= 6) {
          yield put({ type: actionType.ATTACK_DODGED, payload: action.payload })
          break;
        } else {
          yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
          break;
        }
      default:
        yield put({ type: actionType.ATTACK_HIT, payload: action.payload })
        break;
    }
    return yield put({ type: actionType.END_TURN, payload: action.payload })

  } else if (action.payload.enemyState.nextAction === actionType.IMPALE) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_CENTER:
        yield put({ type: actionType.IMPALE_DEFLECTED, payload: action.payload })
        break;
      case actionType.DODGE:
        yield put({ type: actionType.IMPALE_COUNTERED, payload: action.payload })
        break;
      default:
        yield put({ type: actionType.IMPALE_HIT, payload: action.payload })
        break;
    }
    return yield put({ type: actionType.END_TURN, payload: action.payload })

  } else if (action.payload.enemyState.nextAction === actionType.SWEEP) {
    switch (action.payload.playerState.nextAction) {
      case actionType.DEFLECT_DOWN:
        yield put({ type: actionType.SWEEP_DEFLECTED, payload: action.payload })
        break;
      case actionType.JUMP:
        yield put({ type: actionType.SWEEP_COUNTERED, payload: action.payload })
        break;
      default:
        yield put({ type: actionType.SWEEP_HIT, payload: action.payload })
        break;
    }
    return yield put({ type: actionType.END_TURN, payload: action.payload })
  }
}

function* battleAnimator(action) {
  yield put({ type: 'ATTACKING_START', payload: action.payload });
  yield delay(2000);
  yield put({ type: 'ATTACKING_END', payload: action.payload });
}

export function* watchReadyToBattle() {
  yield takeEvery(actionType.READY_TO_FIGHT, battleHandler);
  yield takeEvery(actionType.READY_TO_FIGHT, battleAnimator);
}
