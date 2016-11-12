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
    API.request('/user').then(res => {
      dispatch({
        type: types.UPDATE_USER,
        user: res.user
      });

    });
  };
}

export const verify = (email, code) => {
  return (dispatch) => {
    API.request('/user/verify', API.methods.POST, {
      email: email,
      verificationCode: code
    }).then(res => {
      dispatch({
        type: types.UPDATE_USER_TOKEN,
        token: res.token
      });

      dispatch(fetchUser());
    });
  };
}
