import { createFeature, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const counterReducer = createReducer(
  0,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0)
);

export const counterFeature = createFeature({
  name: 'counter',
  reducer: counterReducer,
});
