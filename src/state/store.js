import {
  applyMiddleware,
  createStore,
  compose as originalCompose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import { registerSagas } from './sagas';

const STORE_NAME = 'MEMORY_DODGE';

function getReduxCompose() {
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: STORE_NAME
    }) :
    originalCompose;
}


export default function configureStore() {
  const compose = getReduxCompose();

  const sagaMiddleware = createSagaMiddleware();

  const store = {
    ...createStore(
      rootReducer,
      compose(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  };

  registerSagas(sagaMiddleware);

  return store;
}
