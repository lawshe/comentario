import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './reducers';
import Root from './containers/Root.js';
import ReactGA from 'react-ga';
import configVariables from 'configVariables';

const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Google Analytics
if (configVariables && configVariables.google_analytics && configVariables.google_analytics.property_id){
  ReactGA.initialize(configVariables.google_analytics.property_id);
}

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js', {
    scope: '/'
  }).then(function(registration) {
    console.log('Service worker registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('ERROR: Service worker registration failed, error:', err);
  });
}

// Stylesheets
const loadStyleSheet = (src) => {
  if (document.createStyleSheet){
    document.createStyleSheet(src);
  } else {
    $('head').append($("<link rel='stylesheet' href='"+src+"' type='text/css' media='screen' />"));
  }
};

loadStyleSheet('/public/vendor/font-awesome/css/font-awesome.min.css');

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('main')
);
