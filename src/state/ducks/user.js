import * as actionType from '../actions';

const initialState = {
  userName: 'Player',
  highscore: ''
}

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionType.CHANGE_USERNAME:
      return {
        state,
        userName: action.payload.userName
      }
    case actionType.GET_HIGHSCORES:
      return {
        state,
        highscore: action.payload
      }

    default:
      return state
  }
}

export default userReducer;
