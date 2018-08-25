import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';

declare var $: number;

type A = {
  a: boolean;
};

type B = {
  b: number;
};

const obj1: A = {
  a: true
};

const obj2: B = {
  b: 10
};

type C = A & B;

const obj3: C = {
  ...obj1,
  ...obj2
};

const x = $;
const numFunc = (n: number) => n + 1;
const y = numFunc(x);

process.exit(1);

// This doesn't throw an error because the types for react-dom are better
ReactDOM.render(
  <Provider store={store}>
    <App name='Carson' />
  </Provider>,
  document.getElementById('root')
);
