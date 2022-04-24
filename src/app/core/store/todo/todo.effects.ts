import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { reset } from '../counter/counter.actions';
import { createTodo, createTodoSuccess, TodoActions } from './todo.actions';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      map((data) => {
        const newData = { ...data.data, id: uuidv4() };
        return createTodoSuccess({ data: newData });
      })
    )
  );

  constructor(private actions$: Actions, private store: Store) {}
}
