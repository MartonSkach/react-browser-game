import * as actionType from '../actions';

const initialState = {
  maxHealth: 100,
  currentHealth: 100,
  maxPosture: 100,
  currentPosture: 0,
  basePostureRegeneration: 5,
  attackDamage: 10,
  nextAction: actionType.BLOCK,
  fighting: false,
  isPostureBroken: false,
  isAlive: true,
}

const playerReducer = (state = initialState, action) => {
  if (action.type === actionType.ATTACKING_START) {
    return {
      ...state,
      fighting: true,
    };
  }
  if (action.type === actionType.ATTACKING_END) {
    return {
      ...state,
      fighting: false,
    };
  }
  if (action.type === actionType.SELECT_NEXT_PLAYER_ACTION) {
    return {
      ...state,
      nextAction: action.payload
    };
  }

  switch (action.type) {
    // COMBAT ACTIONS
    case actionType.ATTACK_HIT:
      if (action.payload.playerState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.playerState.currentHealth - action.payload.enemyState.attackDamage >= 1) {
        return {
          ...state,
          currentHealth: state.currentHealth - action.payload.enemyState.attackDamage,
        }
      } else {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      };
    case actionType.IMPALE_HIT:
      if (action.payload.playerState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.playerState.currentHealth - action.payload.enemyState.impaleDamage >= 1) {
        return {
          ...state,
          currentHealth: state.currentHealth - action.payload.enemyState.impaleDamage,
        }
      } else {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      };
    case actionType.SWEEP_HIT:
      if (action.payload.playerState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.playerState.currentHealth - action.payload.enemyState.sweepDamage >= 1) {
        return {
          ...state,
          currentHealth: state.currentHealth - action.payload.enemyState.sweepDamage,
        }
      } else {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      };
    case actionType.ATTACK_BLOCKED:
      if (action.payload.playerState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.playerState.currentPosture + action.payload.enemyState.attackDamage >= 100) {
        return {
          ...state,
          currentPosture: state.maxPosture,
        }
      } else {
        return {
          ...state,
          currentPosture: state.currentPosture + action.payload.enemyState.attackDamage,
        };
      }
    case actionType.END_TURN:
      if (action.payload.playerState.isPostureBroken && state.currentPosture === state.maxPosture) {
        return {
          ...state,
          isPostureBroken: false,
          currentPosture: state.maxPosture / 2
        }
      } else if (state.currentPosture === state.maxPosture) {
        return {
          ...state,
          isPostureBroken: true
        }
      } else if (state.currentPosture === 0) {
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
      return {
        ...state
      }
  }
}


export default playerReducer;

// ACTION CREATORS

export function selectNextAction(nextAction) {
  return {
    type: actionType.SELECT_NEXT_PLAYER_ACTION,
    payload: nextAction
  };
}
