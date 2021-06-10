import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, /*compose, */applyMiddleware} from 'redux'
import eventsReducer from './reducers/eventsReducer'
import './index.css';
import App from './App';
//import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

const initialState = {events: [ 
  { id: 1, month: 4, year: 2021, day: 3, title: "t1", description: "test" },
  { id: 2, month: 4, year: 2021, day: 3, title: "t2", description: "test2" },
  { id: 3, month: 4, year: 2021, day: 13, title: "t3", description: "other" },
]};

const store = createStore(eventsReducer, initialState, applyMiddleware(thunk)
  //,compose(applyMiddleware(thunk), composeWithDevTools())
  )

console.log(`created store: ${store}`);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
