import { createAction, props } from '@ngrx/store';

export enum CounterActions {
  INCREMENT = '[COUNTER] INCREMENT',
  DECREMENT = '[COUNTER] DECREMENT',
  RESET = '[COUNTER] RESET',
}

export const increment = createAction(CounterActions.INCREMENT);
export const decrement = createAction(CounterActions.DECREMENT);
export const reset = createAction(CounterActions.RESET);
