import { UPDATE_USER_LOCATION } from '../constants/ActionTypes';

const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        location: action.location
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
