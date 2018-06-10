import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './App';

// This doesn't throw an error because the types for react-dom are better
ReactDOM.render(
  <Provider store={store}>
    <App name='Carson' />
  </Provider>,
  document.getElementById('root')
);
