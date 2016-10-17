import { ADD_STARRED_LOCATION } from '../constants/ActionTypes';

const starredLocations = (state = [], action) => {
  switch (action.type) {
    case ADD_STARRED_LOCATION:
      return [
        ...state,
        action.starredLocation
      ];
    default:
      return state;
  }
}

export default starredLocations;
