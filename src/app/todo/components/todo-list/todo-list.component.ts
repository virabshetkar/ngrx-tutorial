import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from '../../../core/models/todo.model';
import { counterSelector } from '../../../core/store/counter/counter.selectors';
import { deleteTodo } from '../../../core/store/todo/todo.actions';
import { todosSelector } from '../../../core/store/todo/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$ = this.store.select(todosSelector);

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {}

  deleteTodo(todoId: number) {
    this.store.dispatch(deleteTodo({ todoId }));
    this.router.navigate(['todo']);
  }
}
