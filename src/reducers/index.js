import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './events';
import user from './user';
import usersLocations from './usersLocations';
import starredLocations from './starredLocations';
import auth from './auth';
import loginForm from './loginForm';
import lastAction from './lastAction';

const rootReducer = combineReducers({
  events,
  user,
  auth,
  loginForm,
  usersLocations,
  starredLocations,
  lastAction,
  routing: routerReducer
});

export default rootReducer;
