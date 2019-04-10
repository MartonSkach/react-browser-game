import * as battleSagas from './battleSagas';

const sagas = {
  ...battleSagas
}

export function registerSagas(middleware) {
  for (const name of Object.keys(sagas)) {
    middleware.run(sagas[name]);
  }
}
