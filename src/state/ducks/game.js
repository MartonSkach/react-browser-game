import * as actionType from '../actions';

const initialState = {
  timeRemaining: 5,
  nextTimeToSet: 5,
  winner: null,
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ATTACK_DEFLECTED:
    case actionType.IMPALE_DEFLECTED:
    case actionType.SWEEP_DEFLECTED:
      return {
        ...state,
        winner: 'player'
      }
    case actionType.ATTACK_HIT:
    case actionType.IMPALE_HIT:
    case actionType.SWEEP_HIT:
      return {
        ...state,
        winner: 'enemy'
      }


    case actionType.UPDATE_TIMER:
      if (action.payload === 0) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          timeRemaining: action.payload - 1,
        }
      }
    case actionType.NEXT_ENEMY_ATTACK:
      return {
        ...state,
        nextTimeToSet: 5
      };
    case actionType.NEXT_ENEMY_MOVESET:
      return {
        ...state,
        nextTimeToSet: 10
      };
    case actionType.NEXT_ENEMY:
      return {
        ...state,
        nextTimeToSet: 30
      };
    case actionType.START_NEW_TURN:
      if (action.payload.playerState.isAlive) {
        return {
          ...state,
          timeRemaining: state.nextTimeToSet,
          winner: null,
        };
      } else {
        return {
          ...state,
          timeRemaining: null
        };
      };
    case actionType.RESTART_LEVEL:
      return {
        ...initialState
      };
    default:
      return state
  }
}

export default gameReducer;
