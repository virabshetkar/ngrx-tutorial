import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import { reset } from '../counter/counter.actions';
import { TodoActions } from './todo.actions';

@Injectable()
export class TodoEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.CREATE),
      tap((x) => console.log(x)),
      map(() => reset())
    )
  );

  constructor(private actions$: Actions, private store: Store) {}
}
