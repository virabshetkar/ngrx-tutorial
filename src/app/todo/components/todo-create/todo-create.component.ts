import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../../../core/models/todo.model';
import { createTodo } from '../../../core/store/todo/todo.actions';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  createTodo(data: Todo) {
    this.store.dispatch(createTodo({ data }));
    this.router.navigate(['todo']);
  }
}
