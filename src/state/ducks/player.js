import * as actionType from '../actions';

const initialState = {
  maxHealth: 100,
  currentHealth: 100,
  maxPosture: 100,
  currentPosture: 0,
  basePostureRegeneration: 5,
  attackDamage: 8,
  itemInSlot1: null,
  itemInSlot2: null,
  itemInSlot3: null,
  nextAction: actionType.BLOCK,
}

const playerReducer = (state=initialState, action) => {
  switch(action.type) {
    // PLAYER ACTIONS
    case actionType.SELECT_NEXT_PLAYER_ACTION:
      return {
        ...state,
        nextAction: action.payload
      };
    // COMBAT ACTIONS
    case actionType.ATTACK_HIT:
      return {
        ...state,
        currentHealth: state.currentHealth - 10,
      };
    case actionType.IMPALE_HIT:
      return {
        ...state,
      };
    case actionType.SWEEP_HIT:
      return {
        ...state,
      };
    case actionType.ATTACK_BLOCKED:
      return {
        ...state,
        currentPosture: state.currentPosture + 5,
      };
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
