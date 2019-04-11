import * as actionType from '../actions';

const initialState = {
  userName: 'Player',
}

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionType.CHANGE_USERNAME:
      return {
        state,
        userName: action.payload.userName
      }

    default:
      return state
  }
}

export default userReducer;
