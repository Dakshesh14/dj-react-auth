import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// importing store related stuff
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);