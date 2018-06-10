import { createStore, Store } from 'redux';

import reducer, { defaultState, State } from './reducer';
import { Actions } from './actions';

// Cannot call createStore with generic params like in TS
const store: Store<State, Actions> = createStore<State, Actions, void, void>(reducer, defaultState);

export default store;
