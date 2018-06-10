// @flow
import { createStore } from 'redux';

import type { Store } from 'redux';

import reducer, { defaultState } from './reducer';
import type { State } from './reducer';
import type { Actions } from './actions';

// Cannot call createStore with generic params like in TS
const store: Store<State, Actions> = createStore(reducer, defaultState);

export default store;
