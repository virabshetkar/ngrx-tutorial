import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const todosSelector = createFeatureSelector<Todo[]>('todo');
export const todoSelector = (prop: number) =>
  createSelector(todosSelector, (s1) => s1.find((x) => x.id === prop));

export const todoSelector2 = createSelector(
  todosSelector,
  (state: Todo[], props: number) => state.find((x) => x.id === props)
);
