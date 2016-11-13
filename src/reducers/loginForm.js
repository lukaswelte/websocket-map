import {
  UPDATE_LOGIN_FORM_NAME,
  UPDATE_LOGIN_FORM_EMAIL,
  UPDATE_LOGIN_FORM_VERIFICATION_CODE,
  LOGIN_FORM_ERROR_INVALID_CODE,
  CLEAR_LOGIN_FORM,
  API_REQUEST,
  API_RESPONSE
} from '../constants/ActionTypes';

const reducer = (state = {email: '', name: '', verificationCode: ''}, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true
      };

    case API_RESPONSE:
      return {
        ...state,
        loading: false
      };

    case UPDATE_LOGIN_FORM_EMAIL:
      return {
        ...state,
        email: action.email
      };

    case UPDATE_LOGIN_FORM_NAME:
      return {
        ...state,
        name: action.name
      };

    case UPDATE_LOGIN_FORM_VERIFICATION_CODE:
      return {
        ...state,
        verificationCode: action.verificationCode
      };

    case LOGIN_FORM_ERROR_INVALID_CODE:
      return {
        ...state,
        invalidCode: action.invalidCode
      }

    case CLEAR_LOGIN_FORM:
      return {};

    default:
      return state;
  }
};

export default reducer;
