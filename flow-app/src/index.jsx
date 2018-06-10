// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App.jsx';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) {
  throw new Error('What?');
}

ReactDOM.render(
  <Provider store={store}>
    <App name='Carson' />
  </Provider>,
  rootElement,
);
