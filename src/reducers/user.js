import { UPDATE_USER_LOCATION, UPDATE_USER } from '../constants/ActionTypes';

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        location: action.location
      };

    case UPDATE_USER:
      return {
        ...state,
        ...action.user
      };

    case 'USER_ID_UPDATE':
      return {
        ...state,
        userID: action.userID
      };

    default:
      return state;
  }
};

export default eventsReducer;
