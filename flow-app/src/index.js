// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const name: string = 'Carson';
const meetup: string = 'TypeScript';

const element: HTMLElement | null = document.getElementById('root');

if (!element) {
  throw new Error('What, are you stupid?');
}

ReactDOM.render(<App name={name} meetup={meetup} />, element);
registerServiceWorker();
