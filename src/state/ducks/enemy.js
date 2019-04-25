import * as actionType from '../actions';

const initialState = {
  maxHealth: 100,
  currentHealth: 100,
  maxPosture: 100,
  currentPosture: 0,
  enemyName: 'Samurai',
  requiredFinishers: 1,
  basePostureRegeneration: 8,
  attackDamage: 25,
  impaleDamage: 15,
  sweepDamage: 12,
  nextAction: 'ATTACK_TOP',
  actionIterator: 0,
  actionArrayLength: 3,
  actionArrayNumber: 0,
  isPostureBroken: false,
  isAlive: true
}

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ATTACK_DEFLECTED:
      if (action.payload.enemyState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.enemyState.currentHealth - action.payload.playerState.attackDamage >= 1) {
        if (action.payload.enemyState.currentPosture + action.payload.playerState.attackDamage >= state.maxPosture) {
          return {
            ...state,
            currentPosture: state.maxPosture,
            currentHealth: state.currentHealth - action.payload.playerState.attackDamage * 0.6,
          }
        } else {
          return {
            ...state,
            currentPosture: state.currentPosture + action.payload.playerState.attackDamage,
            currentHealth: state.currentHealth - action.payload.playerState.attackDamage * 0.6,
          }
        }
      } else {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
    case actionType.IMPALE_COUNTERED:
      if (action.payload.enemyState.currentPosture + action.payload.enemyState.impaleDamage >= state.maxPosture) {
        return {
          ...state,
          currentPosture: state.maxPosture,
        }
      } else {
        return {
          ...state,
          currentPosture: state.currentPosture + state.impaleDamage,
        }
      }
    case actionType.IMPALE_DEFLECTED:
      if (action.payload.enemyState.isPostureBroken) {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
      if (action.payload.enemyState.currentHealth - action.payload.playerState.attackDamage >= 1) {
        if (action.payload.enemyState.currentPosture + action.payload.playerState.attackDamage >= state.maxPosture) {
          return {
            ...state,
            currentPosture: state.maxPosture,
            currentHealth: state.currentHealth - action.payload.playerState.attackDamage * 0.6,
          }
        } else {
          return {
            ...state,
            currentPosture: state.currentPosture + action.payload.playerState.attackDamage * 0.5,
            currentHealth: state.currentHealth - action.payload.playerState.attackDamage,
          }
        }
      } else {
        return {
          ...state,
          currentHealth: 0,
          currentPosture: 0,
          isAlive: false
        }
      }
    case actionType.SWEEP_COUNTERED:
    if (action.payload.enemyState.currentPosture + action.payload.enemyState.sweepDamage >= state.maxPosture) {
      return {
        ...state,
        currentPosture: state.maxPosture,
      }
    } else {
      return {
        ...state,
        currentPosture: state.currentPosture + state.sweepDamage,
      }
    }
    case actionType.SWEEP_DEFLECTED:
    if (action.payload.enemyState.isPostureBroken) {
      return {
        ...state,
        currentHealth: 0,
        currentPosture: 0,
        isAlive: false
      }
    }
    if (action.payload.enemyState.currentHealth - action.payload.playerState.attackDamage >= 1) {
      if (action.payload.enemyState.currentPosture + action.payload.playerState.attackDamage >= state.maxPosture) {
        return {
          ...state,
          currentPosture: state.maxPosture,
          currentHealth: state.currentHealth - action.payload.playerState.attackDamage * 0.6,
        }
      } else {
        return {
          ...state,
          currentPosture: state.currentPosture + action.payload.playerState.attackDamage * 0.5,
          currentHealth: state.currentHealth - action.payload.playerState.attackDamage,
        }
      }
    } else {
      return {
        ...state,
        currentHealth: 0,
        currentPosture: 0,
        isAlive: false
      }
    }
    case actionType.END_TURN:
      if (action.payload.enemyState.isPostureBroken && state.currentPosture === state.maxPosture) {
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
    case actionType.NEXT_ENEMY_ATTACK:
      return {
        ...state,
        nextAction: action.nextAction,
        actionIterator: state.actionIterator + 1,
      };
    case actionType.NEXT_ENEMY_MOVESET:
      return {
        ...state,
        nextAction: action.nextAction,
        actionIterator: 0,
        actionArrayLength: action.actionArrayLength,
        actionArrayNumber: action.actionArray
      };
    case actionType.NEXT_ENEMY:
      return {
        ...state,
        maxHealth: action.maxHealth,
        currentHealth: action.currentHealth,
        maxPosture: action.maxPosture,
        currentPosture: action.currentPosture,
        enemyName: action.enemyName,
        requiredFinishers: action.requiredFinishers,
        basePostureRegeneration: action.basePostureRegeneration,
        attackDamage: action.attackDamage,
        impaleDamage: action.impaleDamage,
        sweepDamage: action.sweepDamage,
        nextAction: action.nextAction,
        actionIterator: action.actionIterator,
        actionArrayLength: action.actionArrayLength,
        actionArrayNumber: action.actionArrayNumber,
        isPostureBroken: action.isPostureBroken,
        isAlive: action.isAlive
      };
    default:
      return state
  }
}

export default enemyReducer;

// ACTION CREATORS
