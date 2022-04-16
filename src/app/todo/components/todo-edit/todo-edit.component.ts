import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Todo } from '../../../core/models/todo.model';
import { updateTodo } from '../../../core/store/todo/todo.actions';
import { todoSelector } from '../../../core/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo$?: Observable<Todo | undefined>;

  constructor(
    private store: Store,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todo$ = this.activeRoute.params.pipe(
      switchMap((params) => this.store.select(todoSelector(+params['todoId'])))
    );
  }

  updateTodo(data: Todo) {
    this.store.dispatch(updateTodo({ data }));
    this.router.navigate(['todo']);
  }
}
