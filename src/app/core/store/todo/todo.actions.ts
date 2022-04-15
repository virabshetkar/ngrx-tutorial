import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodoActions {
  CREATE = '[TODO] CREATE',
  UPDATE = '[TODO] UPDATE',
  DELETE = '[TODO] DELETE',
}

export const createTodo = createAction(
  TodoActions.CREATE,
  props<{ data: Todo }>()
);
export const updateTodo = createAction(
  TodoActions.UPDATE,
  props<Partial<{ data: Todo }>>()
);
export const deleteTodo = createAction(
  TodoActions.DELETE,
  props<{ todoId: number }>()
);
