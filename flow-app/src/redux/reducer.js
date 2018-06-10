// @flow
import type { Reducer } from 'redux';

import {
  INCREMENT,
  DECREMENT,
} from './actions';

import type { Actions } from './actions';

// Can't make this an exact type since I want to spread as Flow is stupid.
// I think the non-spread support sort of makes these exact types pointless...
export type State = {
  count: number,
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
