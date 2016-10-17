import * as types from '../constants/ActionTypes';

export const updateLocation = (location) => {
  return {
    type: types.UPDATE_USER_LOCATION,
    location: {
      lat: location.latitude,
      lng: location.longitude
    }
  };
};
