import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getSelectors } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Todo } from '../../../core/models/todo.model';
import { updateTodo } from '../../../core/store/todo/todo.actions';
import { todoSelector } from '../../../core/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo$?: Observable<Todo | undefined> = this.store
    .select(todoSelector)
    .pipe(filter((x) => x !== undefined));

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  updateTodo(changes: Todo) {
    const id = changes.id;
    this.store.dispatch(updateTodo({ data: { id, changes } }));
  }
}
