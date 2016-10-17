import * as types from '../constants/ActionTypes';

export const starLocation = (description, location) => {
  return {
    type: types.ADD_STARRED_LOCATION,
    starredLocation: {
      description: description,
      location: location
    }
  };
};
