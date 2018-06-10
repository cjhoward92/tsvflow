// @flow
import React from 'react';

type Props = {
  name: string,
};

const App = (props: Props) => (
  <div>Hello {props.name}!</div>
);

export default App;
