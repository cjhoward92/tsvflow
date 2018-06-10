import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Dispatch } from 'redux';

import { increment, decrement } from './redux/actions';
import { State } from './redux/reducer';

type StateProps = {
  count: number;
};

type DispatchProps = {
  onIncrement: () => void;
  onDecrement: () => void;
};

type OwnProps = {
  name: string;
};

type Props = StateProps & DispatchProps & OwnProps;

const App = (props: Props) => (
  <div>
    <div>Hello {props.name}!</div>
    <div>The current count is {props.count}</div>
    <div>
      <button onClick={props.onIncrement} type='button'>Increment</button>
      <button onClick={props.onDecrement} type='button'>Decrement</button>
    </div>
  </div>
);

const mapStateToProps: MapStateToProps<StateProps, OwnProps, State> = (state: State): StateProps => ({
  count: state.count,
});

type AppMapDispatchToProps = MapDispatchToProps<DispatchProps, OwnProps>;
const mapDispatchToProps: AppMapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
