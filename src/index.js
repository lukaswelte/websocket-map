import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Overview from './pages/Overview';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Introduction from './pages/Introduction';
import MarkDetail from './pages/MarkDetail';
import AddMark from './pages/AddMark';
import FilterMenu from './pages/FilterMenu';
import Profile from './pages/ProfilDetail';
import Trip from './pages/TripDetail';
import Imprint from './pages/ImprintDetail';
import { Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import WSInstance from './utilities/LivePeopleWebsocket.js';
import API from './utilities/api';
import { fetchMarks, fetchFavoriteMarks } from './actions/marks';
import { fetchUser } from './actions/user';
import './index.css';

const middleware = routerMiddleware(browserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware, thunk)));
const history = syncHistoryWithStore(browserHistory, store);

API.init(store);

// load initial data
store.dispatch(fetchMarks());

if (store.getState().auth.token) {
  // Load user data if logged in initially
  store.dispatch(fetchUser());
  store.dispatch(fetchFavoriteMarks());
}

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: (state) => state.auth, // how to get the user state
  predicate: (auth) => auth.token,
  redirectAction: push, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <IndexRedirect to="/introduction/1" />
          <Route path="introduction/:id" component={Introduction} />
          <Redirect from="introduction" to="/introduction/1" />
          <Route path="login/:step" component={Login} />
          <Redirect from="login" to="/login/1" />
          <Route path="map" component={Overview} />
          <Route path="mark/:id" component={Overview} >
            <IndexRoute component={MarkDetail} />
          </Route>
          <Route path="filter" component={Overview} >
            <IndexRoute component={FilterMenu} />
          </Route>
          <Route path="add-mark" component={UserIsAuthenticated(Overview)} >
            <IndexRoute component={AddMark} />
          </Route>
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="trip" component={Trip} />
          <Route path="imprint" component={Imprint} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);

const sock = {
  ws: null,
  URL: 'blackwall-map-backend.herokuapp.com',
  wsDipatcher: (msg) => {
    console.log('wsdispatcher', msg);
    const mark = JSON.parse(msg);
    const state = store.getState();
    switch (mark.type) {
      case 'UPDATE_LOCATION_REQUEST':
        sock.ws.postMessage({type: 'USER_LOCATION', location: state.user.location, userID: state.user.userID});
        break;

      case 'USER_ID_UPDATE':
        store.dispatch({type: 'USER_ID_UPDATE', userID: mark.userID});
        break;

      case 'ALL_USERS':
        store.dispatch({type: 'UPDATE_ALL_USERS_LOCATIONS', users: mark.users});
        break;

      default:
        return null;
    }
  },
  stopWS: () => {
    sock.ws.close();
    sock.ws = null
  },
  startWS: () => {
    if(!!sock.ws) sock.ws.close();

    sock.ws = new WSInstance(sock.URL, sock.wsDipatcher)
  }
};

//sock.startWS();
