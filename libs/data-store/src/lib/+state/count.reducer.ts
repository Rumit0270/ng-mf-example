import { createReducer, on, Action } from '@ngrx/store';

import * as CountActions from './count.actions';
import { CountState } from './count.models';

export const COUNT_FEATURE_KEY = 'count';

export interface CountPartialState {
  readonly [COUNT_FEATURE_KEY]: CountState;
}

export const initialCountState: CountState = {
  value: 0,
};

const reducer = createReducer(
  initialCountState,
  on(CountActions.incrementCount, (state) => ({
    ...state,
    value: state.value + 1,
  })),
  on(CountActions.decrementCount, (state) => ({
    ...state,
    value: state.value - 1,
  }))
);

export function countReducer(state: CountState | undefined, action: Action) {
  return reducer(state, action);
}
