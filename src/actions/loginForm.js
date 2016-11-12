import * as types from '../constants/ActionTypes';
import { goToLogin } from './routing';
import API from '../utilities/api';

export const updateEmail = (email) => {
  return {
    type: types.UPDATE_LOGIN_FORM_EMAIL,
    email: email
  };
}

export const updateName = (name) => {
  return {
    type: types.UPDATE_LOGIN_FORM_NAME,
    name: name
  };
}

export const updateVerificationCode = (verificationCode) => {
  return {
    type: types.UPDATE_LOGIN_FORM_VERIFICATION_CODE,
    verificationCode: verificationCode
  };
}

export const register = (name, email) => {
  return (dispatch) => {
    API.request('/user/register', API.methods.POST, {
      name: name,
      email: email
    }).then(res => {
      if (res.message === 'Email already exists' || res.message === 'User created') {
        dispatch(goToLogin(3));
      } else {
        // Something went wrong
        dispatch({
          type: types.LOGIN_FORM_ERROR
        });
      }
    })
  }
}

export const clearForm = () => {
  return {
    type: types.CLEAR_LOGIN_FORM
  };
}
