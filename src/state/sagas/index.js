import * as battleSagas from './battleSagas';
import * as enemyController from './enemyController';
import * as gameController from './gameController';

const sagas = {
  ...battleSagas,
  ...enemyController,
  ...gameController,
}

export function registerSagas(middleware) {
  for (const name of Object.keys(sagas)) {
    middleware.run(sagas[name]);
  }
}
