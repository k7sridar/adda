import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { tennisReducer, hallReducer, clubReducer } from './redux/reducer';
const reducer = combineReducers({
  tennisStore: tennisReducer,
  hallStore: hallReducer,
  clubStore: clubReducer,
});
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
