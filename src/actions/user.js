import * as types from '../constants/ActionTypes';
import API from '../utilities/api';

export const updateLocation = (location) => {
  return {
    type: types.UPDATE_USER_LOCATION,
    location: {
      lat: location.latitude,
      lng: location.longitude
    }
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    API.request('/user/me').then(res => {
      dispatch({
        type: types.UPDATE_USER,
        user: res.data
      });
    });
  };
}
