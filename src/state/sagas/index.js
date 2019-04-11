import * as battleSagas from './battleSagas';
import * as enemyController from './enemyController'

const sagas = {
  ...battleSagas,
  ...enemyController,
}

export function registerSagas(middleware) {
  for (const name of Object.keys(sagas)) {
    middleware.run(sagas[name]);
  }
}
