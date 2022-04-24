import { createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../../models/todo.model';

const selectTodoId = (todo: Todo) => todo.id;

export const todoAdapter = createEntityAdapter<Todo>({
  selectId: selectTodoId,
});
