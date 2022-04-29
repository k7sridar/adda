import React from 'react';
import ReactDOM from 'react-dom/client';
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
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
