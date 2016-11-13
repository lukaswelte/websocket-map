import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import marks from './marks';
import user from './user';
import usersLocations from './usersLocations';
import starredLocations from './starredLocations';
import auth from './auth';
import loginForm from './loginForm';
import lastAction from './lastAction';

const rootReducer = combineReducers({
  marks,
  user,
  auth,
  loginForm,
  usersLocations,
  starredLocations,
  lastAction,
  routing: routerReducer
});

export default rootReducer;
