import * as actionType from '../actions';

const initialState = {
  maxHealth: 100,
  currentHealth: 100,
  maxPosture: 100,
  currentPosture: 0,
  enemyType: 'common',
  requiredFinishers: 1,
  basePostureRegeneration: 5,
  attackDamage: 8,
  impaleDamage: 15,
  sweepDamage: 12,
  nextAction: 'ATTACK_TOP'
}

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ATTACK_DEFLECTED:
      return {
        ...state,
        currentPosture: state.currentPosture + 4,
        currentHealth: state.currentHealth - 8,
      };
    case actionType.IMPALE_COUNTERED:
      return {
        ...state,
      };
    case actionType.IMPALE_DEFLECTED:
      return {
        ...state,
      };
    case actionType.SWEEP_COUNTERED:
      return {
        ...state,
      };
    case actionType.SWEEP_DEFLECTED:
      return {
        ...state,
      };
    default:
      return state
    }
}

export default enemyReducer;

// ACTION CREATORS
