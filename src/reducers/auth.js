import { UPDATE_USER_TOKEN, LOGOUT } from '../constants/ActionTypes';

const authReducer = (state = {token: localStorage.token}, action) => {
  switch (action.type) {
    case UPDATE_USER_TOKEN:
      localStorage.token = action.token;
      return {
        ...state,
        token: action.token
      };

    case LOGOUT:
      delete localStorage.token;
      return {
        ...state,
        token: null
      };

    default:
      return state;
  }
};

export default authReducer;
