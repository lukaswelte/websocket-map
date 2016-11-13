import 'whatwg-fetch';
import { API_REQUEST, API_RESPONSE } from '../constants/ActionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

let store = null;

const API = {
  init: (s) => {
    store = s;
  },

  methods: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  },

  request: (endpoint, method = 'GET', body) => {
    store.dispatch({
      type: API_REQUEST,
      endpoint: endpoint,
      method: method,
      body: body
    });
    return fetch(apiUrl+endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
				'Accept': 'application/json',
        'Authentication': `Bearer ${store.getState().auth.token}`
      },
      body: JSON.stringify(body)
    }).then(res => {
      store.dispatch({
        type: API_RESPONSE,
        request: {
          endpoint: endpoint,
          method: method,
          body: body
        },
        response: res
      });
      return res.json();
    });
  }
};

export default API;
