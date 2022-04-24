import { EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import {
  createTodo,
  createTodoSuccess,
  deleteTodo,
  updateTodo,
} from './todo.actions';
import { todoAdapter } from './todo.adapter';

const initialState = todoAdapter.getInitialState();

export interface TodosState extends EntityState<Todo> {}

// const todos: Todo[] = [
//   { id: 1, title: 'First Todo', description: 'First Description' },
//   { id: 2, title: 'Second Todo', description: 'Second Description' },
//   { id: 3, title: 'Third Todo', description: 'Third Description' },
//   { id: 4, title: 'Fourth Todo', description: 'Fourth Description' },
// ];

export const todoReducer = createReducer(
  initialState,
  on(createTodoSuccess, (state, data) => todoAdapter.addOne(data.data, state)),
  on(updateTodo, (state, data) => todoAdapter.updateOne(data.data, state)),
  on(deleteTodo, (state, data) => todoAdapter.removeOne(data.todoId, state))
);

export const todoFeature = createFeature({
  name: 'todo',
  reducer: todoReducer,
});
