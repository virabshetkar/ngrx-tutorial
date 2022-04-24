import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export enum TodoActions {
  CREATE = '[TODO] CREATE',
  CREATE_SUCCESS = '[TODO] CREATE SUCCESS',
  UPDATE = '[TODO] UPDATE',
  DELETE = '[TODO] DELETE',
}

export const createTodo = createAction(
  TodoActions.CREATE,
  props<{ data: Todo }>()
);
export const createTodoSuccess = createAction(
  TodoActions.CREATE_SUCCESS,
  props<{ data: Todo }>()
);
export const updateTodo = createAction(
  TodoActions.UPDATE,
  props<{ data: Update<Todo> }>()
);
export const deleteTodo = createAction(
  TodoActions.DELETE,
  props<{ todoId: string }>()
);
