import { Action } from 'redux';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';

export interface IncrementAction extends Action<string> {}
export interface DecrementAction extends Action<string> {}

export type Actions = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});
