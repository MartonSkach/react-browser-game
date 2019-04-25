import * as actionType from '../actions';

const initialState = {
  timeRemaining: 5,
  nextTimeToSet: 5
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
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
          timeRemaining: state.nextTimeToSet
        };
      } else {
        return {
          ...state,
          timeRemaining: null
        };
      }
    default:
      return state
  }
}

export default gameReducer;
