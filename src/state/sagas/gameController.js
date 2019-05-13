import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../actions';

function* serveHighscores() {
  const json = yield fetch('https://react-game-highscore.firebaseio.com/highscores.json/').then(response => response.json(), );

  return yield put({type: actionType.GET_HIGHSCORES, payload: json });
}

export function* watchRequest() {
  yield takeEvery(actionType.REQUEST_HIGHSCORES, serveHighscores);
}
