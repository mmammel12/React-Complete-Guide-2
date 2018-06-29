import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  // Can edit request here
  return requestConfig;
}, err => {
  console.error(err);
  return Promise.reject(err);
});

axios.interceptors.response.use(responseSuccess => {
  console.log(responseSuccess);
  // Can edit request here
  return responseSuccess;
}, err => {
  console.error(err);
  return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
