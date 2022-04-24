import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';
import { TodosState } from './todo.reducers';
import { todoAdapter } from './todo.adapter';

export const todoSelectors = todoAdapter.getSelectors();

const { selectRouteParams } = getSelectors();

export const todosAdapterSelector = createFeatureSelector<TodosState>('todo');

export const todosSelector = createSelector(
  todosAdapterSelector,
  todoSelectors.selectAll
);

export const todoSelector = createSelector(
  selectRouteParams,
  todosSelector,
  (s1, s2) => {
    console.log(s1);
    return s2.find((x) => x.id === s1['todoId']);
  }
);
