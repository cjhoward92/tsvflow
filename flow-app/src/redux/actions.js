// @flow
export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';

export type IncrementAction = {|
  type: string,
|};

export type DecrementAction = {|
  type: string,
|};

export type Actions = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});
