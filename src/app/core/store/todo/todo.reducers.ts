import { createFeature, createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { createTodo, deleteTodo, updateTodo } from './todo.actions';

const initialState: Todo[] = [
  { id: 1, title: 'First Todo', description: 'First Description' },
  { id: 2, title: 'Second Todo', description: 'Second Description' },
  { id: 3, title: 'Third Todo', description: 'Third Description' },
  { id: 4, title: 'Fourth Todo', description: 'Fourth Description' },
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, data) => {
    const newTodo = { ...data.data, id: state.length + 1 };
    return [...state, newTodo];
  }),
  on(updateTodo, (state, data) => {
    const id = state.findIndex((x) => x.id === data.data?.id);
    if (id < 0) return state;
    let newState = [...state];
    newState[id] = { ...state[id], ...data.data };
    return newState;
  }),
  on(deleteTodo, (state, data) => {
    return state.filter((x) => x.id !== data.todoId);
  })
);

export const todoFeature = createFeature({
  name: 'todo',
  reducer: todoReducer,
});
