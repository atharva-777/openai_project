import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.scss";
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {api} from '../src/store/api'

export const store = configureStore({
  reducer: {[api.reducerPath]:api.reducer},
  middleware : (getDefault)=>getDefault().concat(api.middleware)
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
)
