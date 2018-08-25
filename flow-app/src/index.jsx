// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './App.jsx';

declare var $: number;

type A = {
  a: boolean
};

type B = {
  b: number
};

type C = { ...A, ...B };

const obj1: A = {
  a: true
};

const obj2: B = {
  b: 10
};

const obj3: C = {
  ...obj1,
  ...obj2
};

type FnType = <T>(...rest: T[]) => *;
const fn: FnType = (...rest) => rest[0];

const x = $;
const numFunc = (n: number) => n + 1;
const y = numFunc(x);

process.exit();

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
