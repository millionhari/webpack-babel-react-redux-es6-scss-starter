import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App.js';
import './index.scss';

const store = createStore(rootReducer);

const mapStateToProps = (state) => state;

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
  );
