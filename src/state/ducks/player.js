import * as actionType from '../actions';

const initialState = {
  maxHealth: 100,
  currentHealth: 100,
  maxPosture: 100,
  currentPosture: 0,
  basePostureRegeneration: 5,
  attackDamage: 10,
  itemInSlot1: null,
  itemInSlot2: null,
  itemInSlot3: null,
  nextAction: actionType.BLOCK,
  fighting: false
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    // PLAYER ACTIONS
    case 'ATTACKING_START':
      return {
        ...state,
        fighting: true,
      };
    case 'ATTACKING_END':
      return {
        ...state,
        fighting: false,
      };
    case actionType.SELECT_NEXT_PLAYER_ACTION:
      return {
        ...state,
        nextAction: action.payload
      };
    // COMBAT ACTIONS
    case actionType.ATTACK_HIT:
      return {
        ...state,
        currentHealth: state.currentHealth - action.payload.enemyState.attackDamage,
      };
      case actionType.IMPALE_HIT:
      return {
        ...state,
        currentHealth: state.currentHealth - action.payload.enemyState.impaleDamage,
      };
      case actionType.SWEEP_HIT:
      return {
        ...state,
        currentHealth: state.currentHealth - action.payload.enemyState.sweepDamage,
      };
      case actionType.ATTACK_BLOCKED:
      return {
        ...state,
        currentPosture: state.currentPosture + action.payload.enemyState.attackDamage,
      };
    // TURN END
    case actionType.END_TURN:
      if (state.currentPosture === 0) {
        return {
          ...state
        }
      } else if (state.currentPosture > 0 &&
        state.currentPosture < state.basePostureRegeneration * (state.currentHealth / state.maxHealth)) {
        return {
          ...state,
          currentPosture: 0
        }
      } else {
        return {
          ...state,
          currentPosture: state.currentPosture - state.basePostureRegeneration * (state.currentHealth / state.maxHealth),
        }
      }
    default:
      return state
  }
}

export default playerReducer;

// ACTION CREATORS


export function selectNextAction(nextAction) {
  return {
    type: 'SELECT_NEXT_PLAYER_ACTION',
    payload: nextAction
  };
}
