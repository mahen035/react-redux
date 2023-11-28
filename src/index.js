import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import accountReducer from './redux/accountReducer';
//import './store';
//import reducer
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { customerReducer } from './redux/customerReducer';
import { rootReducer } from './redux/rootReducer';
import { myLogger } from './redux/myLogger';
import Post from './Post';
import { postReducer } from './redux/postReducer';
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(document.getElementById('root'));

const mystore = createStore(postReducer, applyMiddleware(thunk))
console.log('Store is created=>')
root.render(
  <Provider store = {mystore}>
    {/* <App /> */}
    <Post/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Redux Core / Legacy Redux
// Redux ToolKit (RTK)

// CombineReducer: put all your reducers into one object and use that

// Redux Middleware: Redux provides a point between dispatching an action and the moment it reaches the reducer
