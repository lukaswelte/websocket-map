import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './events';
import user from './user';
import usersLocations from './usersLocations';
import lastAction from './lastAction';

const rootReducer = combineReducers({
  events,
  user,
  usersLocations,
  lastAction,
  routing: routerReducer
});

export default rootReducer;
