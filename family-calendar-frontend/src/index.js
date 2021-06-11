import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import eventsReducer from './reducers/eventsReducer'
import './index.css';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const initialState = {
  events: []
};

// create redux store
const store = createStore(eventsReducer, initialState,
  compose(applyMiddleware(thunk), composeWithDevTools()))

console.log(`created store: ${store}`);

ReactDOM.render(
  // client side routing and history props
  <Router> 
    <Provider store={store}> { /* redux store */}
      <App />
    </Provider>
  </Router>,
  document.getElementById('root') // this is where all the react content goes into
);
