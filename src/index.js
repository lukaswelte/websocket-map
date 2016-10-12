import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Overview from './pages/Overview';
import NotFound from './pages/NotFound';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import WSInstance from './utilities/LivePeopleWebsocket.js';
import './index.css';

const middleware = routerMiddleware(browserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(middleware)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Overview}/>
          <Route path="event" component={Overview} />
          <Route path="*" component={NotFound}/>
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
    const event = JSON.parse(msg);
    const state = store.getState();
    switch (event.type) {
      case 'UPDATE_LOCATION_REQUEST':
        sock.ws.postMessage({type: 'USER_LOCATION', location: state.user.location, userID: state.user.userID});
        break;

      case 'USER_ID_UPDATE':
        store.dispatch({type: 'USER_ID_UPDATE', userID: event.userID});
        break;

      case 'ALL_USERS':
        store.dispatch({type: 'UPDATE_ALL_USERS_LOCATIONS', users: event.users});
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
