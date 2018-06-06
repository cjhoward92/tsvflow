// @flow
import * as React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  name: string,
  meetup: string
};

type State = {
  counter: number
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  state = {
    counter: 0
  };
  
  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const {
      name,
      meetup
    }: Props = this.props;
    const {
      counter
    }: State = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome, {name}, to the {meetup} meetup!</h1>
        </header>
        <p className="App-intro">
          We will be talking about Flow vs TypeScript today!
        </p>
        <p>Counter: {counter}</p>
        <button type='button' onClick={this.incrementCounter}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
