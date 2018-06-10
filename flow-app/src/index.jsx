// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) {
  throw new Error('What?');
}

ReactDOM.render(<App name='Carson' />, rootElement);
