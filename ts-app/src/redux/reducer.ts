import { Reducer } from 'redux';

import {
  INCREMENT,
  DECREMENT,
  Actions,
} from './actions';

export type State = {
  count: number;
};

export const defaultState: State = {
  count: 0,
};

const reducer: Reducer<State, Actions> = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    case DECREMENT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default reducer;
