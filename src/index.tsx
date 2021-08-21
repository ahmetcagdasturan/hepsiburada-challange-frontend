import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/base.scss';
import { Provider } from 'react-redux';
import store from './app/store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
