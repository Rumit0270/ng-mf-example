import { createAction } from '@ngrx/store';

export const incrementCount = createAction('[Count/API] Increment Count');

export const decrementCount = createAction('[Count/API] Decrement Count');
