// @flow
import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  name: string,
};

const App = (props: Props) => (
  <div>Hello {props.name}!</div>
);

ReactDOM.render(<App name='Carson' />, document.getElementById('root'));
